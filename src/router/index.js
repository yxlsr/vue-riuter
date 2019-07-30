import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:()=>import("@/views/Home"),},
    {path:"/list",component:()=>import("@/views/List"),children:[
      {path:"",redirect:"guoji"},
      {path:"guonei",component:()=>import("@/views/Guonei"),name:'guonei'},
      {path:"guoji",component:()=>import("@/views/Guoji"),name:'guoji'}
      
    ]
  },
    {path:"/mine",component:()=>import("@/views/Mine")},
    {path:"/detail/:id",component:()=>import("@/views/Detail"),name:"detail" }
  ]
})
