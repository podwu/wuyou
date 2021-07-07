<template>
 <main id="main">
 	<div class="inner">
 		<section class="login">
 			<header>
 				<ul>
 					<li class="cur">
 						<a href="###1">账号登录</a>
 					</li>
 					<li>
 						<a href="###2">扫码登录</a>
 					</li>
 				</ul>
 			</header>
 			<div class="main">
 				<form action="">
 					<ul>
 						<li>
 							<input type="text" name="usr" placeholder="邮箱/手机号码/小米ID" class="com-input">
 						</li>
 						<li>
 							<input type="password" name="pwd" placeholder="密码" class="com-input">
 						</li>
 						<li class="action">
 							<button type="submit" class="com-button">登录</button>
 						</li>
 						<li class="link">
 							<a href="##">立即注册</a>
 							<a href="##">忘记密码</a>
 						</li>
 					</ul>
 				</form>
 				<div class="others">
 					<a href="#1" class="ico qq">
 						<i></i>
 						<em>QQ登录</em>
 					</a>
 					<a href="#2" class="ico weibo">
 						<i></i>
 						<em>微博登录</em>
 					</a>
 					<a href="#3" class="ico ipay">
 						<i></i>
 						<em>支付宝登录</em>
 					</a>
 					<a href="#4" class="ico weixin">
 						<i></i>
 						<em>微信登录</em>
 					</a>
 				</div>
 			</div>
 		</section>
 	</div>
 </main>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '这是测试页内容RESUME'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* header */
.inner {
	position: relative;
	width: 1130px;
	margin: 0 auto;
}


/* main */
#main {
	background: #fff url(../assets/bg.jpg) center 0 no-repeat;
	/* background-size: cover; */
	height: 588px;
}

.login {
	position: absolute;
	right: 0;
	top: 32px;
	background-color: #fff;
	width: 410px;
	min-height: 556px;
}

.login header>ul {
	overflow: hidden;
	padding: 24px 32px;
	font-size: 24px;
}

.login header>ul>li {
	position: relative;
	float: left;
	width: 50%;
	text-align: center;
}

.login header>ul>li.cur a {
	color: #ff6700;
}

.login header>ul>li:first-child:after {
	content: "";
	position: absolute;
	right: 0;
	top: 50%;
	margin-top: -12px;
	color: #ddd;
	width: 1px;
	height: 24px;
	border-right: 1px solid #ddd;
}

.login .main {
	padding: 0 32px 0;
}
.login .main ul>li {
	margin-bottom: 14px;
}

.login .main .action {
	margin: 0;
	padding-top:8px;
}

.login .main .link {
	margin-top: 24px;
	text-align: center;
}

.login .main .link>a {
	color: #999;
	padding: 0 12px;
}

.login .main .link>a:hover {
	color: #ff6700;
}

.com-input {
	display: block;
	width: 100%;
	padding: 0 16px;
	height: 48px;
	line-height: 48px;
	border: 1px solid #ddd;
	color: #4a4a4a;
}

.com-input::placeholder {
	color: #999;
}

.err.com-input {
	border-color: #ff6700;
}
.msg {
	height: 20px;
	line-height: 20px;
	margin-bottom:14px;
	margin-top:-8px;
	color:#ff6700;
}
.msg:before {
	content:"";
	display: inline-block;
	width: 14px;
	height: 14px;
	vertical-align: middle;
	margin-right:6px;
	background: url(../assets/sprite_login.gif) 0 -69px no-repeat;
}


.com-button {
	display: block;
	border: none;
	width: 100%;
	line-height: 48px;
	background-color: #ff6700;
	color: #fff;
	cursor: pointer;
}

.others {
	position: absolute;
	bottom: 32px;
	left: 32px;
	right: 32px;
	text-align: center;
	font-size: 0;
}

.ico {
	display: inline-block;
	width: 30px;
	height: 30px;
	line-height: 30px;
	border-radius: 50%;
	background-color: #0288d1;
	margin: 0 16px;
}

.ico>i {
	display: inline-block;
	width: 18px;
	height: 18px;
	vertical-align: middle;
	background: url(../assets/icons_type.png) -18px center no-repeat;
}

.ico.weibo {
	background-color: #d32f2f;
}

.ico.weibo>i {
	background-position-x: -36px;
}

.ico.ipay {
	background-color: #0ae;
}

.ico.ipay>i {
	width: 25px;
	background-position-x: -57px;
}

.ico.weixin {
	background-color: #00d20d;
}

.ico.weixin>i {
	width: 24px;
	background-position-x: -84px;
}
</style>
