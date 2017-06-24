<template>
    <div class="hd-wrapper">
        <div class="shop-header">
            <img :src="shop.shopPic" alt="">
            <div class="shop-item">
                <div class="sub-title-holder">
                    <p class="subtitle">{{ shop.deliveryTime }}分钟</p>
                    <p class="subtitle">起送￥{{shop.minFee }}</p>
                    <p class="subtitle">配送￥{{ shop.deliveryFee }}</p>
                </div>
                <p class="delivery-msg">{{ shop.deliveryMsg }}</p>
            </div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import "../less/header";
</style>
<script>
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
