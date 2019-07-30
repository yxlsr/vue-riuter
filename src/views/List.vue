<template>
    <div class="list">
        list!!!
        <div>
            <router-link to="/list/guonei">国内</router-link>
            <router-link :to="{name:'guonei'}">国际</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>

</style>
<script>
export default {
    
}
</script>

