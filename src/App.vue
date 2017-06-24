<style lang="less" rel="stylesheet/less" scoped>
    @import "./components/less/common.less";
    #app{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        .tabs-wrap{
            display: flex;
            .tabs{
                position: relative;
                display: inline-block;
                -webkit-box-flex: 1;
                -webkit-flex: 1 1;
                flex: 1 1;
                border-bottom: 1px solid #e7e7e7;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                background: #fff;
                text-align: center;
                line-height: 45/@rem;
                z-index: 100;
                a{
                    font-size: 13/@rem;
                    text-decoration: none;
                    color: #666;
                }
                a.active{
                    color: #333;
                    font-weight: bolder;
                    &:after{
                        content: '';
                        display: inline-block;
                        position: absolute;
                        left: 33%;
                        bottom: 0;
                        border-top: 3/@rem solid #ffd161;
                        width: 32%;
                    }
                }

            }
        }
    }
</style>
<template>
  <div id="app">
      <v-header :shop="shop"></v-header>
      <div class="tabs-wrap">
          <div class="tabs">
              <router-link to="/menu">菜单</router-link>
          </div>
          <div class="tabs">
              <router-link to="/estimate">评价</router-link>
          </div>
          <div class="tabs">
              <router-link to="/merchants">商户</router-link>
          </div>
      </div>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
    import header from 'components/vue/header'
    import axios from 'axios'
    export default {
        name: 'app',
        data(){
            return {
                shop: {}
            }
        },
        created(){
            axios.get('mock/goodsData.json').then((res)=>{
                let shopData = res.data.data;
                this.shop = shopData.shopInfo;
            })
        },
        components: {
          'v-header': header
        }
    }
</script>
