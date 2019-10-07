# nameless_blog
基于Vue，php开发的花哨个人博客

## 重大保存点
- 2019.9.12 4f9a606 网站开发基本完成，进入生产环境调试前的最后保存
- 2019.9.12 a3d0950 为了方便调试，vue设置了代理，**统一转发/root开头的请求，共67个**(上线前请使用`'/root'\+|/root`在src中正则替换成空字符串)
- 2019.9.22(fix11_) b2bc824 调试修复基本完成，进行css重组前的最后保存
- 2019.9.24 4e19690 css重组完成(确保Space部分没有问题，其他不保证)
- 2019.9.25 b7b470d 项目结构重组1：将global.js和USER_VAR.js解构，并新增config和mixins目录用于容纳
- 2019.9.26 3f8994e 项目结构重组2：将请求接口挂载在Vue原型上，大量减少其import
- 2019.9.26 315bdf5 项目结构重组3：vuex重组，将LuminousBox部分独立成模块;并实现了LuminousBox和markdown图片的对接
- 2019.10.10 		休息!!，发布版本v1.0.0


## GuGuList
未来要实现的功能
- [ ] 评论表冗余去除
- [ ] Anime页面的追番板
- [ ] Space主页面
### GuGu01
- [X] Series页面添加，series添加描述信息，spaceSetting中添加系列描述支持 
- [X] 评论区表情支持，评论区机器人排查

## 修复记录
### Fix01(Mainly for TheTopNav.vue)
- [X] 修复LaunchDraft nodata.png在waiting前显示
- [X] 取消ctrlPanel和back2top在编辑页面的出现
- [X] 修复编辑页面选择框不对齐的问题 vertical-align 统一middle
- [X] topNav侧边导航css大优化，导航跳转后自动收回侧边导航

### Fix02
- [X] homepage修服无内容时没占满宽度的问题
- [X] 在移动端下ACGT等页头图片高度调小，ACGT页面空时，显示空信息
- [X] back2top图片随机化

### Fix03
- [X] Note页面移动端css优化，取消贴边
- [X] .pager 配色、margin更改
- [X] 在移动端下Note、Tag、Link页头图片高度调小，移动端Tag页面头部字体大小调小
- [X] About,Link部分样式和CommentModule合并
- [X] Note、Tag页面的列表css优化

### Fix04
- [X] search页面随机推荐字体颜色更改
- [X] Tag-cloud的title和随机推荐的title字体大小减小
- [X] topNav 配色更改
- [X] Link、About页面margin调整
- [X] 全局字体颜色更改为#1e1e1e

### Fix05
- [X] Tag页面结果列表margin调整
- [X] CommentModule 等待过渡动画位置摆正
- [X] Search页面搜索栏常驻，并允许点击搜索图标;设置搜索冲突（上次搜索结果未来之前不允许下次搜索）
- [X] 修复移动端下info-box内容会换行导致缺失的问题（white-space不允许换行）
- [X] ACGT页面及Note页面增加等待过渡动画

### Fix06
- [X] 移动端下进入个人空间进行提示
- [X] 在个人空间注销时返回主页
- [X] 调整Note页面在不同宽度下的最低高度（随页头图片高度而变动）
- [X] 修复侧边导航栏头像下面有小部分空白的情况，压缩侧边导航栏的高度

### Fix07
- [X] 移动端下文章标题大小调整
- [X] 移除snow颜色背景，修改snow颜色字体/阴影
- [X] 控制面板在z-index调整，网站设置面板字体切换实现

### Fix08
- [X] 字体切换区域详细指定，对两种字体进行细微的兼容工作
- [X] 文章标题导航栏扩宽，增加title显示，不允许换行（超出隐藏）
- [X] 翻页/加载到底部时显示到底信息

### Fix09
- [X] 顶部导航栏在顶部与背景大图重叠时透明化（能看到一点），鼠标hover时显示（限PC端）
- [X] 翻页模块上下翻页按钮由v-show改为v-if渲染
- [X] 修复因**Fix05[2]**造成的insertBefore失效（取消回复时因位置偏移出错）
- [X] 为最后一条评论添加底部margin（防止过度贴近Footer）
- [X] 首页内容区域扩宽，首页置顶文章自适应优化

### Fix10
- [X] spaceLaunchAdmin中的操作按钮css优化
- [X] Article中document.title变化逻辑修正
- [X] Article头部去除作者名字与头像，取而代之的是文章类型链接
- [X] Article数据初始化修正及补充
- [X] Article增加系列信息的显示，并因此调整genNavList()逻辑
- [X] Article目录只在PC端渲染

### Fix11
- [X] 为Homepage和Note页面添加公告信息，并连接后端
- [X] 各种css优化

### Fix12
- [X] 对Footer进行了重制，并且填充了逻辑
- [X] panelH样式优化
- [X] 添加404页面
- [X] 为编辑页面路由设置loginStatus，编辑页面进入前会判断登录状态
- [X] 去除Note旧代码和console.log

