<template>
    <div class="index">
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import Nav from "../components/Nav"
    export default{
        name: 'index',
        components: {
            Nav
        }
    }
</script>
<style>
.index{margin-top:.8rem;}
</style>
