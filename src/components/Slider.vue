<template>
    <swipe class="my-swipe">
        <swipe-item v-for="val in banner" :key="val._id">
            <router-link :to="'/detail/'+val._id+'?dataName='+'slider'"> 
                <img :src="server.baseUrl+val.img">
                <div class="text-box">
                    <h2>{{val.title1}}</h2>
                </div>
            </router-link>
        </swipe-item>
    </swipe>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';

export default {
    props:['banner','dataName'],
    components: {
        'swipe': Swipe,
        'swipe-item': SwipeItem
    },
}
</script>

<style>
.my-swipe {height: 200px;color: #fff;font-size:.6rem;text-align: center;position: relative;top:.8rem;}
.my-swipe img{width:100%;height:100%}
.my-swipe .text-box{width:100%;height:1.1rem;position:absolute;left:0;bottom:0;color:#fff;background:rgba(0,0,0,0.5);}
.my-swipe .text-box h2{font-size:0.3rem;font-weight:normal;padding-top:.15rem;text-overflow:ellipsis;}
</style>

