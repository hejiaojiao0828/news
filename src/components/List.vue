<template>
   <div class="newsList">
        <ul>
            <li v-for="val of list" :key="val._id">
                <router-link :to="'/detail/'+val._id+'?dataName='+dataName">
                    <div class="aui-middle-dome-title">
                        <h3>{{val.title1}}</h3>
                        <div class="clearfix">
                            <span class="aui-top box-line">{{val.top}}</span>
                            <span class="aui-title">{{val.title}}</span>
                            <span class="aui-comment">{{val.comment}}</span>
                        </div>
                    </div>
                    <div class="aui-middle-dome-img">
                        <img :src="server.baseUrl+val.img" alt="">
                    </div>
                </router-link>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    props:["list","dataName"],
}
</script>

<style scoped>
.newsList{margin:0 auto;margin-bottom:1rem;}
.newsList ul{ padding:.8rem .4rem 0;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.aui-middle-dome-title{display: inline-block;width: 67%;vertical-align: middle;}
.aui-middle-dome-title h3{overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;
-webkit-line-clamp: 2;line-height:.4rem;margin-right:.09rem;font-size:.3rem;font-weight: normal;color: #222;
max-height: 100%;text-align:left;margin-bottom:0;padding-bottom:0;margin-top:0;}
.aui-middle-dome-title .clearfix{margin-top:.18rem;display:flex;justify-content:space-around}
.aui-middle-dome-title .aui-top{width:.6rem;color: #f85959;vertical-align: middle;
display:inline-block;font-size:.28rem;text-align: center;border-radius: 2px;}    
.box-line {position: relative;}
.box-line:before {content: " ";position: absolute;top: 0;left: 0;width: 200%;height: 200%;border: 1px solid rgba(248, 89, 89, 0.95);
border-radius: 0;color: rgba(248, 89, 89, 0.95);transform-origin: 0 0;transform: scale(0.501);}
.aui-title{color: #fff;display: inline-block;vertical-align: middle;font-size:.28rem;}
.aui-comment{color: #999;display: inline-block;vertical-align:middle;font-size:.28rem;}
.aui-middle-dome-img{position: relative;overflow: hidden;width: 33%;display: inline-block;vertical-align: middle;}
.aui-middle-dome-img img{border: none;display: block;width: 100%;pointer-events: none;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
-webkit-user-select: none;text-decoration: none;}

</style>