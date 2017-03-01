<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease" v-show="food.count > 0" @click.stop.prevent="decreaseCart">
                <span class="minus-icon"></span>
            </div>
        </transition>
        <p class="cart-count" v-show="food.count>0">{{food.count}}</p>
        <div class="cart-add" @click.stop.prevent="addCart"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';

    export default {
        props: {
            food: {
                type: Object
            }
        },
        methods: {
            addCart(event) {
                if (!this.food.count) {
                    Vue.set(this.food, 'count', 1);
                } else {
                    this.food.count++;
                }
                this.$emit('add', event.target);
            },
            decreaseCart(event) {
                if (this.food.count) {
                    this.food.count--;
                }
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    @import "../less/common.less";
    .cartcontrol{
        .cart-decrease{
            display: inline-block;
            opacity: 1;
            transform: translate3d(0, 0, 0);
            .minus-icon{
                background: url("./../../assets/minus.png") no-repeat;
                background-size: 25/@rem 25/@rem;
                width: 25/@rem;
                height: 25/@rem;
                display: inline-block;
            }
            &.move-enter-active, &.move-leave-active{
                transition: all 0.4s linear;
            }
            &.move-enter, &.move-leave-active{
                opacity: 0;
                transform: translate3d(24/@rem, 0, 0);
                .inner{
                    transform: rotate(180deg);
                }
            }
        }
        .cart-count{
            display: inline-block;
            vertical-align: top;
            width: 16/@rem;
            text-align: center;
            padding-top: 10/@rem;
            line-height: 10/@rem;
            font-size: 16/@rem;
            color: #333;
        }
        .cart-add{
            display: inline-block;
            background: url("./../../assets/plus.png") no-repeat;
            background-size: 25/@rem 25/@rem;
            width: 25/@rem;
            height: 25/@rem;
        }
    }
</style>
