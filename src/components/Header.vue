<template>
  <div id="header">
    <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="logo" class="logo">
    <h1 v-if="isShow">用户登录</h1>
    <h1 v-else="isShow">我的购物车</h1>
    <div class="link">
      <router-link to="/login">登录</router-link> |
      <router-link to="/">购物车</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        isShow: ""
      }
    },
    watch: {
      $route(to) {
        if (to.path == "/login") {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    display: flex;
    height: 100px;
    border-bottom: 2px solid #f60;
    align-items: center;
    padding: 0 40px;
  }

  .logo {
    width: 48px;
    height: 48px;
    margin-right: 20px;
  }

  #header h1 {
    font-size: 28px;
    font-weight: 400;
    color: #666;
    width: 200px;
  }

  #header .link {
    width: 100%;
    text-align: right;
  }
</style>
