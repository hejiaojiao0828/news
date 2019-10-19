<template>
    <div class="news">
        <div class="Header-box">
            <div class="Header-header">
                <img src="../assets/images/logo-news.png" />
            </div>
        </div>
        <div class="content">
            <div class="circle">
                <div class="circle-top">
                    <img src="../assets/images/f-n0.jpg">
                    <div class="right">
                        <p>
                            <span>胖子</span>
                            <b>新闻圈</b>
                        </p>
                        <h3>31分钟前</h3>
                    </div>
                </div>
                <p>
					近日，俄军最高统帅部组织了第五届全军炮兵旅预备队实地演练，出动了大批重型火炮，其中就包括当今口径最大的自行迫击炮——2S4“郁金香”240毫米自行迫击炮。本图集就此解读。
				</p>
                <img src="../assets/images/f-n0.jpg">
                <ul>
                    <li><i class="i1"></i>888</li>
                    <li><i class="i2"></i>666</li>
                    <li><i class="i3"></i>888</li>
                </ul>
            </div>
        </div>
        <List :list="list" :dataName="'News'"></List>
    </div>
</template>

<script>
import List from "../components/List"
export default {
    data(){
        return {
            list:[],
        }
    },
    components:{List},
    mounted(){
        axios({
            url:"http://localhost:3000/api/news",
            params:{_limit:8}
        }).then(res=>this.list=res.data.data)
    }
}
</script>

<style>
.Header-box{width:100%;height:.8rem;position:fixed; top:0;left:0; z-index:2;}
.Header-header{width:100%;height:0.8rem;background:#f85959;}
.Header-header img{width:100px;float:left;margin:.2rem;}

.content{font-size:.22rem;}
.content .circle{width:100%;}
.content .circle .circle-top{padding:.1rem .3rem;display:flex;justify-content:space-between;}
.content .circle .circle-top img{width:.68rem;height:.45rem;border-radius:50%;margin-right:.2rem;}
.content .circle .circle-top .right{width:90%;padding-right:.3rem;}
.content .circle .circle-top .right p{display:flex;justify-content:space-between;}
.content .circle .circle-top .right p span{color:#03a9f4;}
.content .circle .circle-top .right h3{color:#757575;text-align:left;font-weight:normal;}
.content .circle>p{color:#212121;margin:.1rem .5rem .1rem .3rem;text-align:left;}
.content .circle>img{width:88%;margin:.1rem .5rem .1rem .3rem;}
.content .circle ul{margin:.1rem .5rem .1rem .3rem;display:flex;justify-content:space-between;line-height:.4rem;}
.content .circle ul li{float:left;}
.content .circle ul li i{display:inline-block;width:.4rem;height:.3rem;}
.content .circle ul li i.i1{background:url(../assets/images/eyes.png) center;height:.2rem;background-size:cover}
.content .circle ul li i.i2{background:url(../assets/images/talk.png);background-size:cover}
.content .circle ul li i.i3{background:url(../assets/images/good.png);width:.3rem;background-size:cover}


</style>