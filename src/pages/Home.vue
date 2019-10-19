<template>
    <div class="home">
        <Slider :banner="banner"></Slider>
        <List :list="list" :data-name="'Home'"></List>
    </div>
</template>
<script>
    import Slider from "../components/Slider"
    import List from "../components/List"
    export default{
        data(){
            return {
                banner:[],
                list:[]
            }
        },
        components:{
            Slider,List
        },
        mounted(){
            axios({
                url:"http://localhost:3000/api/slider"
            }).then(
                res=>this.banner=res.data.data
            )
            axios({
               url:"http://localhost:3000/api/home",
               params:{_limit:10}
            }).then(res=>this.list=res.data.data)
        }

    }
</script>
<style>
</style>
