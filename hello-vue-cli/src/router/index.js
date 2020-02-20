import Vue from 'vue'
import Router from 'vue-router'
// 导入上面创建的路由配置目录
// 导入自定义的组件，@是src文件夹的意思
import Content from "@/components/Content";

// 安装(使用)路由
Vue.use(Router);

// 配置路由，新建一个路由对象
export default new Router({
  // 路由是多个的，故为数组
  routes: [
    {
      // 路由路径
      path: '/content',
      // 路由名称
      name: 'content',
      // 跳转到组件
      component:Content
    }
  ]
});
