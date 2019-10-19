<template>
    <div class="user">
        <div class="header">
            <div class="header-list">
                <div class="list-top">
                    <div class="list-img"><img :src="server.baseUrl + user.icon"></div>
                    <h2>
                        <p>{{user.nikename}}</p>
                        <h3>{{user.tell}}</h3>
                    </h2>
                </div>
            </div>
            <ul class="clear">
                <li>
                    <span>{{user.dynamic}}</span>
                    <p>动态</p>
                </li>
                <li>
                    <span>{{user.follow}}</span>
                    <p>关注</p>
                </li>
                <li class="end">
                    <span>{{user.fans}}</span>
                    <p>粉丝</p>
                </li>
            </ul>
        </div>
        <ul class="xinxi">
            <li>我的消息</li>
            <li>最新动态</li>
            <li>离线阅读</li>
            <li>
                <p>
                    <span>积分商城</span>
                    <b>0元好物在这里</b>
                </p>
            </li>
            <li @click="logout">退出账号</li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return{
            user:{}
        }
    },
    beforeRouteEnter(to,from,next){
        axios({
            url:"http://localhost:3000/api/user",
        }).then(
            res=>res.data.err===0 ? next(_this=>_this.user=res.data.data) : next('/login')
        )
    },
    methods:{
        logout(){
            axios({
                url:"http://localhost:3000/api/logout",
                method:"delete"
            }).then(
                res=>res.data.err===0 && this.$router.push('/index')
            )
        }
    }

}
</script>

<style scoped>
.user{margin:0 auto; margin-bottom:0.8rem;}
.user .header{height:2.4rem; background:#eb413d;justify-content:flex-start;flex-direction:column;}
.header .header-list{padding: 14px 0;width:6.4rem;}
.header .header-list .list-top{display:flex;margin:0 .4rem;}
.header .header-list .list-top .list-img{width:.9rem;height:.9rem;padding:.2rem .3rem 0 0;}
.header .header-list .list-top .list-img img{border-radius:50%;width:100%;}
.header .header-list .list-top h2{padding:.25rem 0;text-align:left;color:#fff;}
.header .header-list .list-top h2 h3{font-size:.22rem;}
.header ul{display:flex;}
.header ul li{width:50%;height:0.7rem;color:#fff;border-right:1px solid #fff;font-size:.22rem;}
.header ul li span{height:0.37rem; line-height:0.37rem; text-align:center; display:block;}
.header ul li p{text-align:center;height:0.32rem; line-height:0.32rem;}
.header ul li.end{ border:0;}
.xinxi{margin-top:2.4rem;background:#f5f5f5;padding-bottom:.01rem;}
.xinxi li{margin-bottom:.2rem;background:#fff;height:.8rem;line-height:.8rem;padding:0 .4rem;display:flex;position:relative;}
.xinxi li:before{content: '';width:.2rem;height:.2rem;position:absolute;top:50%;right:.8rem;margin-top:-0.15rem;background: transparent;border: 1px solid #ddd;border-top: none;border-right: none;z-index: 2;-webkit-border-radius: 0;border-radius: 0;-webkit-transform: rotate(-135deg);transform: rotate(-135deg);}
.xinxi li p{display:flex;justify-content: space-between;width:88%;font-weight:normal;}
</style>