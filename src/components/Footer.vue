<template>
    <div class="foot-btn">
		<ul>
			<router-link class="index" tag="li" to="/index" active-class="active"><i></i><a href="javescript:;">首页</a></router-link >
			<router-link class="news" tag="li" to="/news" active-class="active"><i></i><a href="javescript:;">要闻</a></router-link >
			<router-link class="user" tag="li" to="/user" active-class="active"><i></i><a href="javescript:;">我的</a></router-link >
		</ul>
	</div>
</template>

<style scoped>
.foot-btn{width:100%;height:.9rem;position:fixed;left:0;bottom:0;border-top:1px solid rgba(207, 207, 207, 0.95);background:#efefef;}
.foot-btn ul{width:100%;position:relative;display:flex;justify-content:space-around;}
.foot-btn ul li{margin-top:0.1rem;font-size:.2rem;}
.foot-btn ul li i{width:0.39rem;height:0.4rem;display:inline-block;}
.foot-btn ul .index i{background:url(../assets/images/index.png) no-repeat 0 0;background-size:100%;} 
.foot-btn ul .news i{background:url(../assets/images/news.png) no-repeat 0 0;background-size:100%;}
.foot-btn ul .movie i{background:url(../assets/images/movie.png) no-repeat 0 0;background-size:100%;}
.foot-btn ul .user i{background:url(../assets/images/user.png) no-repeat 0 0;background-size:100%;}
.foot-btn ul li a{display:block;width:100%;height:100%;}
.foot-btn ul li.active a{color:#f85959}
</style>