<template lang="html">
    <div class="m-menu">
        <div class="menu-list">
            <ul>
                <li v-for="item in dishCategory">{{ item.category }}</li>
            </ul>
        </div>
        <div class="foods">
            dsfdsf
        </div>
        <v-cart :shop="shop"></v-cart>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import "../less/common.less";
    .m-menu{
        background: #ededed;
        .menu-list{
            position: fixed;
            width: 23%;
            left: 0;
            top: 118/@rem;
            bottom: 50/@rem;
            height: auto;
            z-index: 10;
            display: inline-block;
            overflow: hidden;
            background-color: #f8f8f8;
            transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
            transition-duration: 0ms;
            ul{
                list-style: none;
                li{
                    position: relative;
                    overflow: hidden;
                    display: block;
                    color: #666;
                    border-bottom: 1/@rem solid #f3f0f0;
                    border-right: 1/@rem solid #f3f0f0;
                    font-size: 12/@rem;
                    line-height: 16/@rem;
                    padding: 12/@rem 0/@rem 12/@rem 10/@rem;
                    background-color: #fafafa;
                }
            }
        }
        .foods{
            display: inline-block;
            float: right;
        }
    }
</style>
<script>
    import '../../lib/flexible';
    import header from 'components/vue/header'
    import axios from 'axios'
    import cart from 'components/vue/cart'

    export default{
        props: {
            shop: {
                type: Object
            },
            dishCategory: {
                type: Array
            }
        },
        data(){
            return {

            }
        },

        components: {
            'v-header': header,
            'v-cart': cart
        }
    }
</script>
