<template>
  <table class="cart-list ">
    <thead>
      <tr>
        <th class="t_check"><span @click="allSelect">{{isAll?"反选":"全选"}}</span></th>
        <th class="t_title">商品名称</th>
        <th class="t_price">单价</th>
        <th class="t_num">数量</th>
        <th class="t_total">小计</th>
        <th class="t_action">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in goods" :key="index">
        <td class="t_check">
          <input type="checkbox" :value="item.g_id" v-model="item.select">
        </td>
        <td class="t_title">
          <img :src="item.g_img" align="middle">
          {{item.g_name}}
        </td>
        <td class="t_price">{{item.g_price.toFixed(2)}}元</td>
        <td class="t_num">
          <div class="count-box">
            <button @click="sub(index)">-</button>
            <input type="text" v-model="item.g_num">
            <button @click="add(index)">+</button>
          </div>
        </td>
        <td class="t_total">{{(item.g_price*item.g_num).toFixed(2)}}元</td>
        <td class="t_action">
          <button class="btn-del" @click="delGoods(index)">删</button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="info">
          <button @click="selectDel" class="btn-selectDel" v-if="getTotal.selectNum">选择删除</button>
          共{{goods.length}}件商品，已选择{{getTotal.selectNum}}件
        </td>
        <td colspan="3" class="action">
          <span class="total">合计：<b>{{getTotal.totalPrice.toFixed(2)}}元</b></span>
          <button type="button" class="btn-submit">去结算</button>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
  export default {
    name: "Cart",
    data() {
      return {
        goods: [
          //         {
          //   "g_id": 1,
          //   "g_name": "小米无线充电宝30W 10000mAh",
          //   "g_price": 189,
          //   "g_num": 1,
          //   "g_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1599811904.09223358.jpg?thumb=1&amp;w=108&amp;h=108"
          // },
          // {
          //   "g_id": 2,
          //   "g_name": "小米无线充电宝青春版10000mAh",
          //   "g_price": 109,
          //   "g_num": 1,
          //   "g_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1568083247.368995.jpg?thumb=1&w=108&h=108"
          // },
          // {
          //   "g_id": 3,
          //   "g_name": "7号彩虹电池（10粒装）",
          //   "g_price": 9.9,
          //   "g_num": 1,
          //   "g_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/T178EjBjVT1RXrhCrK.jpg?thumb=1&w=108&h=108"
          // },
          // {
          //   "g_id": 4,
          //   "g_name": "MIX FOLD 小米折叠屏手机 12GB+256GB 黑色",
          //   "g_price": 9999,
          //   "g_num": 1,
          //   "g_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1617098695.73526265.jpg?thumb=1&w=108&h=108"
          // }
        ],
        isAll: false
      }
    },
    computed: {
      getTotal: function() {
        var sum = 0,
          num = 0;
        //console.log(this.goods,2)
        for (var j = 0; j < this.goods.length; j++) {
          if (this.goods[j].select == true) {
            sum = sum + this.goods[j].g_price * this.goods[j].g_num;
            num++
          }
        }
        return {
          totalPrice: sum,
          selectNum: num
        }
      }
    },
    mounted: function() {
      this.getData();
      var _this = this;
      setTimeout(function() {
        for (var i = 0; i < _this.goods.length; i++) {
          _this.$set(_this.goods[i], 'select', false);
        }
      },400);
    },
    methods: {
      getData: function() {
        this.axios
          .get('/static/goods_.json')
          .then(
            res => {
              this.goods = res.data;
              console.log(this.goods)
            }
          )
          .catch(
            err => console.log(err)
          );
      },
      add: function(i) {
        this.goods[i].g_num++;
      },
      sub: function(i) {
        if (this.goods[i].g_num > 1) {
          this.goods[i].g_num--;
        } else {
          alert("商品数量不能小于1！")
        }
      },
      delGoods: function(i) {
        this.goods.splice(i, 1);
      },
      selectDel: function() {
        this.goods = this.goods.filter(function(item) {
          return item.select == false;
        })
      },
      allSelect: function() {
        for (var i = 0; i < this.goods.length; i++) {
          if (this.isAll) {
            this.goods[i].select = false;
          } else {
            this.goods[i].select = true;
          }
        }
        if (this.isAll) {
          this.isAll = false;
        } else {
          this.isAll = true;
        }
      }
    }
  }
</script>
<style>
  .cart-list {
    width: 100%;
    border: 1px solid #ddd;
  }

  .cart-list th,
  .cart-list td {
    padding: 16px;
    border-style: solid;
    border-color: #ddd;
    border-width: 1px 0;
    vertical-align: middle;
    text-align: center;
  }

  .cart-list th {
    background-color: #f6f6f6;
    color: #999;
  }

  .cart-list .action {
    text-align: right;
  }

  .cart-list .info {
    text-align: left;
  }

  .t_check {
    width: 64px;
  }

  .cart-list .t_title {
    width: 480px;
    text-align: left;
  }

  .t_title img {
    width: 64px;
    height: 64px;
  }

  .t_price {
    width: 120px;
  }

  .t_num {
    width: 160px;
  }

  .t_total,
  .total>b {
    color: #f60;
  }

  .t_action {
    width: 160px;
  }

  .count-box button {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .count-box input {
    width: 40px;
    height: 20px;
    border: 1px solid #eee;
    text-align: center;
  }

  .btn-del {
    width: 32px;
    height: 32px;
    border-radius: 20px;
    border: 1px solid #ddd;
    cursor: pointer;
    color: #f00;
  }

  .btn-del:hover {
    border-color: #f00;
    background-color: #f00;
    color: #fff;
  }

  .btn-submit {
    padding: 10px 20px;
    background-color: #f60;
    color: #fff;
    margin-left: 20px;
    cursor: pointer;
  }

  .btn-selectDel {
    padding: 5px 10px;
    border: 1px solid #ddd;
    margin-right: 20px;
    cursor: pointer;
  }
</style>
