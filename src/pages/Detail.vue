<template>
    <div class="detail">
        <header class="header"> 
            <div class="header-iconfont" @click="goback"></div>
            <div class="aui-title">新闻列表</div>
            <div class="aui-icon-more"></div>
        </header>

        <div class="aui-main">
            <article class="article padding-side">
                <div>
                    <h1 class="article-title">{{data.title1}}</h1>
                </div>
                <div class="article-content">
                    <p>{{data.dev}}</p>
                    <p><img :src="server.baseUrl+data.img" alt=""></p>
                    <p>{{data.author}}</p>
                </div>
            </article>
        </div>

        <div class="aui-card-list-content">
            <div class="aui-bg-like">
                <i class="aui-icon-like"></i>
                <span>{{data.like}}</span>
            </div>
            <div class="aui-share-icon clearfix">
                <div class="aui-share-line b-line clearfix">
                    <h2>分享到</h2>
                </div>
                <ul class="clearfix">
                    <li><i class="aui-icon-wechat"></i></li>
                    <li><i class="aui-icon-wechat-circle"></i></li>
                    <li><i class="aui-icon-weibo"></i></li>
                </ul>
            </div>

            <ul class="aui-list">
                <li class="aui-list-item aui-list-item-middle" v-for="(val,index) of data.comment1" :key="index">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-media">
                            <img :src='server.baseUrl+val.icon'>
                        </div>
                        <div class="aui-list-item-inner ">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title">{{val.name}}</div>
                                <div class="aui-list-item-right">{{val.num}}<i class="aui-iconfont"></i></div>
                            </div>
                            <div class="aui-list-item-text">
                                {{val.discuss}}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data:{},
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        },
    },
    mounted(){
        let id = this.$route.params.id
        let dataName = this.$route.query.dataName
        console.log(id,dataName)
        axios({
            url:`http://localhost:3000/api/${dataName}/${id}`
        }).then(
            res=>{
                this.data=res.data.data;
                console.log(this.data)
                if(Array.isArray(this.data)){
                   this.data=res.data.data[0] 
                }
            } 
        )
    }
}
</script>

<style>
.header{display:flex;justify-content:space-around;width:100%;position:fixed;top:0;left:0;background:#eb413d;z-index:99;height:.8rem;}
.header .header-iconfont{height:.4rem;width:.33rem;background:url(../assets/images/history.png) no-repeat;margin-top:.2rem;}
.header .aui-title{font-size:16px;line-height:.8rem;color:#fff}
.header .aui-icon-more{height:.33rem;width:.33rem;background:url(../assets/images/more.png) no-repeat;margin-top:.35rem;}
.aui-main{margin:.9rem 0 .9rem;}
.aui-main .article{position: relative;overflow: hidden;background-color: #fff;text-align:left;}
.aui-main .padding-side{padding:0 .2rem;}
.article-title {color: #000;font-size: 22px;line-height: 1.45;font-weight: 600;}
.article-content{margin-top:.2rem;}
.article-content p{word-wrap: break-word;color: #000;font-size: 14px;line-height:.45rem;}
.article-content p img{width:100%}

.aui-card-list-content{word-break:break-all;font-size:.3rem;color: #212121;position:relative;bottom:.85rem;}
.aui-bg-like{background: #EF4F4F;width:2.8rem;padding:.1rem 0;border-radius:2px;margin:0 auto;color: #fff;text-align: center;margin-bottom: 20px;}
.aui-card-list-content i{display:inline-block;}
.aui-icon-like{width:.3rem;height:.3rem;background:url(../assets/images/like.png) no-repeat 0 .05rem;}
.aui-share-icon{width:3rem;margin: 0 auto;}
.aui-share-line {position: relative;}
.b-line:before {content: " ";position: absolute;left: 0;bottom: 0;right: 0;height: 1px;border-bottom: 1px solid rgba(207, 207, 207, 0.95);color: rgba(207, 207, 207, 0.95);-webkit-transform-origin: 0 100%;transform-origin: 0 100%;-webkit-transform: scaleY(0.501);transform: scaleY(0.501);}
.aui-share-line h2{font-size: 12px;position: absolute;left: 28%;top: -10px;background: #fff;padding: 0 10px;color: #999;}
.aui-share-icon ul{padding:.25rem 0;}
.clearfix::after{clear: both;content: ".";display: block;height: 0;visibility: hidden;}
.aui-share-icon ul li{width: 33.33%;float: left;text-align: center;}
.aui-share-icon ul li i{display:inline-block;width:.6rem;height:.6rem;}
.aui-share-icon ul li i.aui-icon-wechat{background:url(../assets/images/weixin.png) no-repeat}
.aui-share-icon ul li i.aui-icon-wechat-circle{background:url(../assets/images/friend.png) no-repeat}
.aui-share-icon ul li i.aui-icon-weibo{background:url(../assets/images/weibo.png) no-repeat}

.aui-list{position: relative;border-top:1px solid #ddd;font-size:.2rem;}
.aui-list .aui-list-item{margin:0 .35rem;color: #212121;border-bottom: 1px solid #ddd;position: relative;min-height:.9rem;-webkit-box-sizing: border-box;box-sizing: border-box;display: -webkit-box; display: -webkit-flex;display: flex;-webkit-box-pack: justify;-webkit-justify-content: space-between;justify-content: space-between;}
.aui-media-list-item-inner{width:100%;display:flex;}
.aui-list .aui-list-item-media{width:.77rem;position: relative;padding:.2rem 0;padding-right:.25rem;display: inherit;-webkit-flex-shrink: 0;flex-shrink: 0;-webkit-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-webkit-align-items: flex-start;align-items: flex-start;}
.aui-list .aui-list-item-media img{width:100%;display:block;border-radius:50%;}
.aui-list-item-inner{padding:.18rem 0;}
.aui-list .aui-list-item-text{font-size:.25rem;color: #222;position:relative;-webkit-box-sizing: border-box;box-sizing: border-box;display: -webkit-box;display: -webkit-flex;display: flex;-webkit-box-pack: justify;-webkit-justify-content:space-between;justify-content: space-between;-webkit-align-items: center;align-items:center;width:4.5rem;}
.aui-list .aui-list-item-title{position: relative;max-width: 100%;color: #4395ff;}
.aui-list .aui-list-item-right{max-width: 50%;position: relative;color: #757575;margin-left:.1rem;}
.aui-iconfont{background:url(../assets/images/good.png) no-repeat;display:inline-block;width:.3rem;height:.3rem;}
.aui-card-list-footer{margin-bottom:.8rem;color: #4395ff;line-height:.6rem;padding:0.1rem 0.3rem;position:relative;}
</style>