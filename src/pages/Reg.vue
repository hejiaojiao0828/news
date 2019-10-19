<template>
    <div class="content">
        <header class="header"> 
            <div class="header-iconfont" @click="goback"></div>
        </header>
        <div class="login-box">
            <p class="lsolid"></p>
            <div class="login">
                <router-link to="/login">登录</router-link>
                <span></span>
                <router-link to="/reg">注册</router-link>
            </div>
            <p class="rsolid"></p>
        </div>
        <ul>
            <li>
                <input type="text" v-model="username"/>
                <span>帐号</span>
            </li>
            <li>
                <input type="text" v-model="password"/>
                <span>密码</span>
            </li>
            <li class="lifirst">
                <input type="num"  v-model="tell"/>
                <span>手机号</span>
            </li>
            <li class="lifirst">{{mess}}</li>
        </ul>
        <div class="footbox">
            <input type="button" value="注 册" class="login-btn" @click="reg"/>
            <a href="javascript:;" class="tishi">忘记密码？</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:"",
            password:"",
            tell:"",
            mess:""
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        },
        reg(){
            let formData = new FormData();
            formData.append('username',this.username)
            formData.append('password',this.password)
            formData.append('tell',this.tell)

            this.$axios({
                url:"http://localhost:3000/api/reg",
                method:'post',
                data:formData
            }).then(res=>{
                if(res.data.err === 0){
                    this.$router.push('/login')
                }else{
                    this.mess=res.data.msg
                }
            })
        }
    },


}
</script>

<style scoped>
body{background:#f2f4f5;}
.content{max-width:6.4rem; margin:0 auto;}
.header{width:100%;position:fixed;top:0;left:0;background:#eb413d;z-index:99;height:.8rem;justify-content:flex-start;}
.header .header-iconfont{height:.4rem;width:.33rem;background:url(../assets/images/history.png) no-repeat;margin:.2rem 0 0 .2rem;}
.content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
.login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
.login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
.content .login-box{position:relative;top:1rem;}
.content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
.content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
.content ul{width:5.78rem;height:2.92rem;border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:1.5rem;}
.content ul li{height:0.95rem; position:relative;border-bottom:1px solid #e5e7e8;}
.content ul li.lifirst{border-bottom:0;}
.content ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
.content ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
.content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
.content .login-btn{width:4.65rem;height:0.65rem; background:#eb413d; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
.content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>