<template>
    <div class="cartfooter">
        <div class="container">
            <i class="cart"></i>
            <p class="min-del">另需配送费￥{{ shop.deliveryFee }}</p>
            <p class="min-fee">{{ shop.minFee }}￥起送</p>

        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import "../less/common.less";
    .cartfooter{
        position: fixed;
        overflow: visible;
        zoom: 1;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1001;
        height: 50/@rem;
        background-color: #000;
        opacity: .7;
        display: inline-block;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        .container{
            position: relative;
            width: 100%;
            .cart{
                position: absolute;
                background: url("./../../assets/cart.png") no-repeat;
                background-size: 50/@rem auto;
                width: 50/@rem;
                height: 50/@rem;
                left: 10/@rem;
                top: -24/@rem;
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
</style>
<script>
    import '../../lib/flexible';
    export default{
        props: {
            shop: {
                type: Object
            }
        },
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>
