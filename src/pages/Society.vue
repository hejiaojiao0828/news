<template>
    <div class="society">
        <List :list="list" :dataName="'Society'"></List>
    </div>
</template>

<script>
import List from "../components/List"

export default {
    data(){
        return {list:[]}
    },
    components:{List},
    mounted(){
        axios({
            url:"http://localhost:3000/api/society"
        }).then(res=>this.list=res.data.data)
    }
}
</script>