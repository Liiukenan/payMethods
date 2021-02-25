import Vue from "vue";
import VueRouter from "vue-router";
const Home=()=>import("../views/Home.vue");
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      keepAlive: true // 需要缓存
    }
  },
  {
    path: "/information",
    name: "information",
    component: () =>
      import("../components/Information.vue"),
    meta: {
        keepAlive: true // 需要缓存
    }
  }
];

const router = new VueRouter({
  // mode:'history',
  routes:routes
});

router.beforeEach((to,from,next)=>{
  // console.log(to)
  // console.log(from)
  next({path:'/'})
})

export default router;
