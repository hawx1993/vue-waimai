<template>
    <div class="shop-wrap">
        <div class="m-shop">
            <div class="shopName">
                <div class="shop-item">
                    <p class="title">{{ shopInfo.shopName }}</p>
                    <star :score="shopInfo.shopStar"></star>
                    <p class="info">
                        <span></span>
                        <span>{{shopInfo.sold}}</span>
                    </p>
                    <div class="shop-tel">
                        <a :href="shopInfo.shopPhone"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="shopDetail">
            <p><i class="broadcast"></i>{{shopInfo.tip}}</p>
            <p><i class="time"></i>{{shopInfo.serTime}}外送</p>
            <p><i class="address"></i>{{shopInfo.shopAddress}}</p>
            <p><i class="img"></i>{{shopInfo.shopEnvTitle}}</p>
        </div>
        <div class="other">
            <p v-if="shopInfo['brandMsg']">
                <i class="brand"></i>
                {{shopInfo.brandMsg}}
            </p>
            <p v-if="shopInfo['onlinePay']">
                <i class="pay"></i>
                该商户支持在线支付
            </p>
            <p v-if="shopInfo.invoiceMsg">
                <i class="ticket"></i>
                {{shopInfo.invoiceMsg}}
            </p>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    @import "./../less/common";
    @import "./../less/merchants";
</style>
<script>
    import axios from 'axios'
    import flexible from './../../lib/flexible'
    import star from './star';

    export default{
        data(){
            return{
                shopInfo: {}
            }
        },
        created(){
            axios.get('static/shopInfo.json').then((res)=>{
                this.shopInfo = res.data.data;
            })
        },
        components:{
            star
        }
    }
</script>
