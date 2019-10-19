<template>
    <div class="nav">
        <ul>
            <router-link tag="li" to="/index/home" active-class="active"><a href="javascript:;">推荐</a></router-link>
            <router-link tag="li" to="/index/society" active-class="active"><a href="javascript:;">社会</a></router-link>
            <router-link tag="li" to="/index/Recreation" active-class="active"><a href="javascript:;">娱乐</a></router-link>
        </ul>
    </div>
</template>
<style>
.nav{width:100%;text-align:center;height:.8rem;display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;
display: flex;-webkit-box-pack: center;-ms-flex-pack: center;-webkit-justify-content: center;justify-content: center;
-webkit-box-align: center;-ms-flex-align: center;-webkit-align-items: center;align-items: center;cursor:pointer;position:fixed;background: #efefef;
border-bottom:1px solid rgba(207, 207, 207, 0.95);top:.8rem;z-index:5;}
.nav ul{position:relative;width:100%;height:100%;z-index:1;display:flex;justify-content:space-around;}
.nav ul li{line-height:.8rem;font-size:16px;}
.nav ul li a{color:#000;font-size:.3rem;}
.nav ul li.active a{color:#ec5566}
</style>