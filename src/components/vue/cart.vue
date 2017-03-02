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
                <p class="delivery">另需配送费￥{{shop.deliveryFee}}</p>
            </div>
            <div class="btn-submit" @click="goAccount">去结算</div>
        </div>
        <!--购物车盒子-->
        <transition name="flag">
            <div class="cart-panel-detail"   v-show="cartShow">
                <div class="shopcart-container">
                    <div class="cart-head" >
                        <span class="titile">购物车</span>
                        <span class="clear-icon"></span>
                        <span class="clear-btn" @click="clearCart">清空购物车</span>
                    </div>
                    <ul class="cart-content" ref="listContent">
                        <li class="dish-list" v-for="item in selectFoods">
                            <p class="name">{{item.name}}</p>
                            <p class="price">￥{{ item.discountPrice}}</p>
                            <cartControl :food="item"></cartControl>
                        </li>
                    </ul>
                </div>
                <div class="dialog" v-show="showDialog">
                    <div class="content">确定要清空购物车吗？</div>
                    <div class="btn">
                        <a href="#" class="cancel">取消</a>
                        <a href="#" class="confirm" id="confirm">确定</a>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import "../less/common";
    @import "../less/shopcart";
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
            }
        },
        data(){
            return{
                dish : {},
                flag: true,
                showDialog: false
            }
        },
        computed: {
            totalPrice() {
                let total = 0;
                this.selectFoods.forEach((item) => {
                    this.dish = item;
                    if(item.count && item.discountPrice){
                        total += item.discountPrice * item.count;
                    }
                });
                return total;
            },
            totalCount() {
                let count = 0;
                this.selectFoods.forEach((item) => {
                    if(item.count){
                        count += item.count;
                    }
                });
                return count;
            },
            cartShow() {
                if (!this.totalCount) {
                    this.flag = true;
                    return false;
                }
                let show = !this.flag;
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
                window.alert(`支付${this.totalPrice + this.shop.deliveryFee}元`);
            },
            toggleList() {
                if (!this.totalCount) {
                    return false;
                }
                this.flag = !this.flag;
            },
            hideList() {
                this.flag = true;
            },
            clearCart() {
                var self = this;
                self.showDialog = true;
                var confirmBtn = document.getElementById('confirm');
                var cancelBtn  = document.getElementsByClassName('cancel')[0];
                if(self.showDialog){
                    confirmBtn.addEventListener('click',function () {
                        self.selectFoods.forEach((item) => {
                            item.count = 0;
                            self.showDialog = false;//防止点击购物车icon直接出现对话框
                            self.flag = true;//防止清空购物车后再次点击加入购物车出现购物车弹出
                        });
                    });
                    cancelBtn.addEventListener('click', function () {
                        self.showDialog = false;
                    })
                }
            }
        },
        components:{
            cartControl: cartcontrol
        }
    }
</script>
