- 今日校园-大学圈组件开发 CollegeCircle
    1. 分析组件：
        首先大学圈 Header组件
        下面的 三个选项  关注  本校 问答  可以使用列表   List组件
           选中列表项后的高亮：字体样式 after-下划线，定位
           点击后高亮上去：可以使用classnames{}
        
        再下面是数据展示部分 ListItem：
            准备工作：从fastmock 创将数据接口（数据包括头像，昵称，文字描述，图片，学校，还要加个关注状态）
            
            展示数据：
                头像  昵称         ...（点击可出现模态框 ）
                      时间
                文字描述
                图片
                （图标）分享 抢评论 点赞（没有赞时：送上热门
                                  点赞后，一个点击加一）
        
        Footer 组件 即今日校园应用的tab 会涉及到路由，npm i react-router react-router-dom ,但因现在开发的是一个组件，并不会涉及到其他的页面组件路由，
    思路及步骤： 创conmponents 文件夹 组件夹-index.jsx+style.js
      创assets文件夹  1. styles 文件夹—recet.css 记得在入口文件mian.jsx 中import './assets/styles/reset.css'
                    2. 引入iconfont阿里图标字体库  然后在需要使用图片的文件中 import '../../assets/font/iconfont.css'
                       或者 npm i font-awesome@4.7.0 然后在入口文件mian.jsx 中import 'font-awesome/css/font-awesome.min.css'  
     创api文件夹 专门用来获取数据的  request.js (使用axios.get(''),记得 npm i axios)

     创完文件夹后开始写组件-App

    手写模态框，父子组件的关系
    引用weui的模态框： npm i weui react-weui
     import 'weui'
    import 'react-weui/build/dist/react-weui.css'

  - 点击在模态框中的操作，该模态框消失，跳出小弹框
        思路：1.首先模态框消失 与onCancel一样
            2.跳出先弹框  同理 useState(变量)+ setTimeout()



- 项目继续扩充：
    1. 点击抢评论的时候进入详情页，参考美团，会弹出发表评论（发个友善的评论...）的模态框加键盘，背景两部分，上半部分是对应说说，但是右边有个关注，下半部分是全部评论，右边点赞，没有评论时居中显示“还没有人评论咧，点击抢沙发”
        发表评论时，会有个加载操作，成功后，会显示出来。
    2. 点击举报时又是一个模态库，举报原因下（色情低俗、政治敏感、违法、广告、病毒木马、其他、取消）无论点击哪一种原因，都会弹出举报成功小字样


    3. 移动端的适配性：src根目录public 文件夹下的js文件夹下的adpter.js
        在首页index.html的<head>中引入    
            <script src="/public/js/adapter.js"></script>
        引入后，其他地方用到的px都要换成rem,font-size可以继续用px
    4. 优化路径
        在项目下的vite.config.js中添加
        import path from 'path'
         resolve:{
            alias:{
            "@":path.resolve(__dirname,'src')
            }
        }
    5. 评论页面，点击评论 去到另外一个页面 用路由？确定了，就是路由; App.jsx 去添加路由配置
     npm i react-route;  npm i react-route-dom
        点击评论同时，触发了另外一个页面的发言弹层:输入框+键盘弹出+遮罩层
        最底层是说说详情页（点击图片区域触发），
            - <  详情：
                引入antd-mobile,import {NavBar} from 'antd-mobile'
            - < 要返回上一页，使用react-route-dom里的 let navigate=useNavigate()
            navigate(-1)
               <NavBar 
                back='返回'
                onBack={() => navigate(-1)}
                >
                    详情
                </NavBar>
            - 下面的说说展示使用唯一的值筛选，再来展示
    
- antd react 重写Modal的弹窗样式
Modal.show()
    getcontainer：false;
 还是手写更好！！

 - 发表评论
    监听enter事件，获取文本框的值，显示在评论区；图片和昵称藏在一个对象里；
    每次监听到enter的时候，重新set数据

    

- 上线：把项目交给github 托管，直接访问

    1. 这项服务的名字叫 github pages
    2. 免费的二级域名
        纯静态资源

- 相对地址有问题：
    工程化vite配置，将index.html 与 assets 的关系配置成./：
        base:'./'
    github 中可能有很多项目
        /根路径
    - 上传源码，连github仓库
        git add .
        git commit -m ''
        git branch -M main
        git remote add origin 地址
        git push -u origin main
        如果出现没有证书
        输入 git config   --global http.sslVerify false
        再push

    -  npm i gh-pages -D
       npm run build
       在package.json 文件中：
            deploy:"gh-pages -d dist"
        npm run deploy
    

    - redux 中间件 redux-thunk
    - 数据接口请求多加一个config.js
    - 记得在父组件提供一个Provider

 要加：
    - cssTransition  
        react-transition-group@4.2.1
    - 改变useRef聚焦 输入评论的时候

    点击赞同：整个盒子都变成已赞同 数量加一
        想法： 一整个盒子装两个，点击相应的变成一个

    - redux 发送太多次。在useEffect ()里面加个判断
    如： {
         if(!rankList.length){
      getRankListDataDispatch();
    }
    }

    -改detail bug csstransition bug 加scroll，加prop-types
    - 文章

    - picture-o