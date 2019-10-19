<template>
    <div class="recreation">
        <List :list="list" :data-name="'recreation'"></List>
    </div>
</template>

<script>
import List from "../components/List"
export default {
    data(){
        return {
            list:[]
        }
    },
    components:{List},
    mounted(){
        axios({
            url:"http://localhost:3000/api/recreation" 
        }).then(res=>{this.list=res.data.data})
    }
}
</script>