<template>
  <div id="footer">
  	<div class="link">
  		<a href="###1">小米商城</a>
  		<a href="###2">米家</a>
  		<a href="###3">米聊</a>
  		<a href="###4">多看</a>
  		<a href="###5">游戏</a>
  		<a href="###6">政企服务</a>
  	</div>
  	<div class="copyright">copyright © 2020 mi.com</div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {

      }
    }
  }
</script>

<style>
  #footer {
  	background: #f9f9f9 url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/slogan2020.png) center 100px no-repeat;
  	padding:40px 40px 70px;
  	color:#999;
  	text-align: center;
  }
  #footer a {color:#666;}
  #footer .link {padding-bottom: 12px;}
</style>
