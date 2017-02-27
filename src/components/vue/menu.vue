<template lang="html">
    <div class="m-menu">
        <!--左侧菜单栏-->
        <div class="menu-wrap" ref="menuWrapper">
            <ul class="menu-list">
                <li v-for="(item,index) in dishCategory" class="menu-item" :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)">{{ item.category }}</li>
            </ul>
        </div>
        <!--右侧食品栏-->
        <div class="foods-wrap" ref="foodsWrapper">
            <ul>
                <!--每个分类下的食品列表-->
                <li v-for="item in dishCategory" class="foods-list" ref="dishList">
                    <h1 class="title">{{ item.category }}</h1>
                    <ul>
                        <!--单个食品-->
                        <li  v-for="food in item.dishList" class="food-item">
                            <div class="dish-basic">
                                <div class="img">
                                    <img :src="food.largeImg">
                                </div>
                                <div class="content">
                                    <div class="name">{{ food.name}}</div>
                                    <p class="description">{{ food.desc}}</p>
                                    <div class="extra">
                                        <span class="count">月售{{food.sold}}份</span>
                                    </div>
                                    <div class="deal">
                                        <span class="price">￥{{food.discountPrice}}</span>
                                        <div class="dish-oper">
                                            <i class="icon-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!--<div class="cartcontrol-wrapper">-->
                                <!--<cartcontrol @add="addFood" :food="food"></cartcontrol>-->
                            <!--</div>-->
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <v-cart :shop="shop"></v-cart>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import "../less/common.less";
    @import "../less/menu.less";
</style>
<script>
    import '../../lib/flexible';
    import header from 'components/vue/header'
    import axios from 'axios'
    import cart from 'components/vue/cart'
    import BScroll from 'better-scroll';

    export default{
        data(){
            return {
                shop: {},
                dishCategory: [],
                listHeight: [],
                scrollY: 0
            }
        },
        computed:{
            currentIndex() {
                for (let i = 0; i < this.listHeight.length; i++) {
                    let height1 = this.listHeight[i];
                    let height2 = this.listHeight[i + 1];
                    if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                        return i;
                    }
                }
                return 0;
            },
        },
        created(){
            axios.get('static/goodsData.json').then((res)=>{
                let shopData = res.data.data;
                this.shop = shopData.shopInfo;
                this.dishCategory = shopData.dishCategory;
                this.$nextTick(() => {
                    this._initScroll();
                    this._calculateHeight();
                });
            })
        },
        methods: {
            selectMenu(index, event){
                let dishList = this.$refs.dishList;
                let $el = dishList[index];
                this.foodsScroll.scrollToElement($el, 300);
            },
            _initScroll() {
                this.meunScroll = new BScroll(this.$refs.menuWrapper, {
                    click: true
                });

                this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                    click: true,
                    probeType: 3
                });

                this.foodsScroll.on('scroll', (pos) => {
                    this.scrollY = Math.abs(Math.round(pos.y));
                });
            },
            _calculateHeight() {
                let foodList = this.$refs.dishList;
                let height = 0;
                this.listHeight.push(height);
                for (let i = 0; i < foodList.length; i++) {
                    let item = foodList[i];
                    height += item.clientHeight;
                    this.listHeight.push(height);
                }
            }
        },
        components: {
            'v-header': header,
            'v-cart': cart
        }
    }
</script>
