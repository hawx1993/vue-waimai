<template>
    <!--没添加商品-->
    <div class="cartfooter" v-if="!totalCount">
        <div class="container">
            <i class="cart"></i>
            <p class="min-del">另需配送费￥{{ shop.deliveryFee }}</p>
            <p class="min-fee">{{ shop.minFee }}￥起送</p>
        </div>
    </div>
    <!--已添加商品-->
    <div class="new-cart" v-else>
        <div class="box">
            <i class="cart-icon" @click="toggleList">
                <i class="num">{{totalCount}}</i>
            </i>
            <div class="price-box">
                <p class="total"> ￥{{totalPrice}}</p>
                <p class="delivery">另需配送费￥{{shop.minFee}}</p>
            </div>
            <div class="btn-submit" @click="goAccount">去结算</div>
        </div>
        <!--购物车盒子-->
        <transition name="fold">
            <div class="shopcart-container" v-show="cartShow">
                <div class="cart-head">
                    <span class="titile">购物车</span>
                    <span class="clear-icon"></span>
                    <span class="clear-btn">清空购物车</span>
                </div>
                <ul class="listContent" ref="listContent">
                    <li class="dish-list">
                        <p class="name">{{selectFoods.name}}</p>
                    </li>
                </ul>
            </div>
        </transition>
        <!--遮罩层-->
        <transition name="fade">
            <div class="list-mask" @click="hideList" v-show="cartShow"></div>
        </transition>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import "../less/common.less";
    .common-footer{
        position: fixed;
        display: inline-block;
        overflow: visible;
        zoom: 1;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1001;
        height: 50/@rem;
        background-color: #000;
        opacity: .7;
        .webkit-box;
        .center-box;
    }
    .common-cart{
        background-size: 50/@rem auto;
        width: 50/@rem;
        height: 50/@rem;
    }
    .cartfooter{
        .common-footer;
        .container{
            position: relative;
            width: 100%;
            .cart{
                .common-cart;
                position: absolute;
                left: 10/@rem;
                top: -24/@rem;
                background: url("./../../assets/cart.png") no-repeat;
            }
            p{
                display: inline-block;
                color: #999;
                font-size: 14/@rem;
            }
            .min-del{
                margin-left: 70/@rem;
            }
            .min-fee{
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                position: absolute;
                right: 20/@rem;
                font-weight: bolder;
                font-size: 16/@rem;
            }
        }
    }
    .new-cart{
        .common-footer;
        .box{
            .cart-icon{
                .common-cart;
                position: absolute;
                left: 10/@rem;
                top: -10/@rem;
                background: url("./../../assets/colorcart.png") no-repeat;
                .num{
                    position: absolute;
                    right: -10/@rem;
                    top: -10/@rem;
                    width: 30/@rem;
                    height: 30/@rem;
                    border-radius: 50%;
                    background-color: #fb4e44;
                    color: #fff;
                    text-align: center;
                    font-size: 18/@rem;
                    line-height: 30/@rem;
                    padding: 1/@rem;
                    -webkit-transform: scale(.5);
                    font-style: normal;
                }
            }
            .price-box{
                width: 100%;
                padding: 8/@rem 0 8/@rem 70/@rem;
                display: inline-block;
                .total{
                    color: #fff;
                    font-size: 24/@rem;
                    font-weight: bolder;
                    line-height: 26/@rem;
                }
                .delivery{
                    color: #999;
                    font-size: 12/@rem;
                    line-height: 12/@rem;
                    padding-left: 4/@rem;
                }
            }
            .btn-submit{
                position: absolute;
                color: #000;
                top: 0;
                right: 0;
                width: 110/@rem;
                height: 50/@rem;
                text-align: center;
                font-size: 16/@rem;
                font-weight: bolder;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                background: #ffd161;
                line-height: 50/@rem;
            }
        }
    }
    .shopcart-container{
        position: fixed;
        bottom: 50/@rem;
        width: 100%;
        background-color: red;
    }

</style>
<script>
    import '../../lib/flexible';
    import cartcontrol from 'components/vue/cartcontrol'
    import BScroll from 'better-scroll';

    export default{
        props: {
            selectFoods: {
                type: Array
            },
            shop:{
                type: Object
            },
            fold: true
        },
        data(){
            return{}
        },
        computed: {
            totalPrice() {
                let total = 0;
                this.selectFoods.forEach((food) => {
                    food.forEach((item)=>{
                        if(item.count && item.discountPrice ){
                            console.log('dd');
                            total += item.discountPrice * item.count;
                        }
                    })
                });
                return total;
            },
            totalCount() {
                let count = 0;
                this.selectFoods.forEach((food) => {
                    food.forEach((item)=>{
                        if(item.count){
                            count += item.count;
                        }
                    })
                });
                return count;
            },
            cartShow() {
                if (!this.totalCount) {
                    this.fold = true;
                    return false;
                }
                let show = !this.fold;
                if (show) {
                    this.$nextTick(() => {
                        if (!this.scroll) {
                            this.scroll = new BScroll(this.$refs.listContent, {
                                click: true
                            });
                        } else {
                            this.scroll.refresh();
                        }
                    });
                }
                return show;
            }
        },
        methods: {
            goAccount(){
                window.alert(`支付${this.totalPrice}元`);
            },
            toggleList() {
                if (!this.totalCount) {
                    return;
                }
                this.fold = !this.fold;
            },
            hideList() {
                this.fold = true;
            }
        },
        components:{
            cartcontrol: cartcontrol
        }
    }
</script>
