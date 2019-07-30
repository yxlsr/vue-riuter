<template>
  <div id="app">
    hello
   <div>
   
   <router-link
    v-for="item in navs"
    :key="item.id"
    :to="item.path"
    active-class="abc"
   >
  {{item.title}}

   </router-link>
   </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  // .router-link-active{
  //   color:red;
  // }
  // .router-link-exact-active{
  //   color: pink;
  // }
  .abc{
    color: green
  }
</style>
<script>
export default {
  data(){
    return{
      navs:[
        {id:1,title:"首页",path:"/home"},
         {id:2,title:"列表",path:"/list"},
          {id:3,title:"我的",path:"/mine"},
      ]
    }
  }
}
</script>
