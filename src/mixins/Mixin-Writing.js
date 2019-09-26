import PCONF from "../config/project.conf"
export default {
	data(){
		return{
			mdSetting:PCONF.MDEditMode,
			tagOptions:[],

			title:'',
			author:'oshino',
			preview:'',
			rawContent:'',
			selectedTags:[],
			inputTags:'',
			hi:null,

			tiFocus:false,
			imageClick(e){
				let imgs = document.querySelectorAll('.v-show-content img');
				let index = 0;
				for (; index < imgs.length; index++) {
					if(imgs[index]===e)
						break
				}
				this.$store.commit('lumiBox/indexC',index);
				this.$store.commit('lumiBox/showC',true);
			}
		}
	},
	beforeRouteLeave(to,from,next){
		if(to.name==='space'||to.name==='homepage')next();
		else{
			let r = window.confirm('离开会导致未保存的信息丢失，是否继续');
			if(r)next();
		}
	},
	methods:{
		selectTag(t){
			if(this.selectedTags.indexOf(t)===-1)
				this.selectedTags.push(t);
			else this.selectedTags.splice(this.selectedTags.indexOf(t),1)
		},
		deleteTag(t){
			this.selectedTags.splice(this.selectedTags.indexOf(t),1)
		},
		imgAdd(pos,$file){
			let param = new FormData();
			param.append('img',$file);
			param.append('token',this.token);
			this.$post_form('/apis/edit/mdimg.php',param).then(response=>{
				this.$refs.md.$img2Url(pos,'http://localhost'+response.data.imgSrc);
				setTimeout(()=>this.loadImgs(),200);
			}).catch(err=>console.warn(err));
		},
		imgDel(pos){
			let delImg = /\/uploads\/\d{4}\/\d{2}\/\d{2}\/.+$/.exec(pos[0])[0];
			console.log(delImg);
			this.$post('/apis/edit/mdimg.php',{token:this.token,delImg:delImg}).then(response=>this.loadImgs()).catch(err=>console.warn(err));
		},
		loadImgs(){
			let imgs = document.querySelectorAll('.v-show-content img');
			let IDTs = [];
			imgs.forEach(e=>{
				IDTs.push({imgSrc:e.src,description:e.alt})
			});
			this.$store.commit('lumiBox/imgsC',IDTs)
		},
		hiAdd(){
			document.getElementById('hi-add').click();
		},
		hiChange(e){
			let file = e.target.files[0];
			if (file) {
				if(/image\/\w+/.test(file.type))
					if(file.size<5000000){
						let fr = new FileReader();
						fr.onload = function(){document.getElementById('hi').style.backgroundImage='url('+fr.result+')'};
						fr.readAsDataURL(file);
						this.hi = file;
					}
					else
						window.alert('文件过大');
				else window.alert('请选择正确的文件类型')
			}
		},
	}
}