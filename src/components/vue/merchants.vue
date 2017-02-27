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
    @import "./../less/common.less";
    .common{
        height: 15/@rem;
        width: 15/@rem;
        display: inline-block;
        margin-right: 10/@rem;
    }
    .shop-wrap{

        .m-shop{
            padding-top: 2/@rem;
            .shopName{
                padding: 14/@rem 0;
                background: #fff;
                border-bottom: 1px solid #f0f0f0;
                .shop-item{
                    position: relative;
                    margin-left: 10/@rem;
                    .info{
                        font-size: 12/@rem;
                        color: #999;
                        line-height: 12/@rem;
                    }
                    .shop-tel{
                        position: absolute;
                        right: 10/@rem;
                        top: 0/@rem;
                        a{
                            display: inline-block;
                            float: right;
                            background: url('../../assets/tel.png');
                            background-size: 100% 100%;
                            width: 30/@rem;
                            height: 30/@rem;
                        }
                    }
                }
            }
        }
        .shopDetail{
            margin-top: 14/@rem;
            background-color: #ffffff;
            border-bottom: 1/@rem solid #f0f0f0;
            border-top: 1/@rem solid #f0f0f0;
            p{
                display: inline-block;
                padding: 15/@rem 0;
                width: 86%;
                line-height: 20/@rem;
                word-wrap: break-word;
                margin-left: 10/@rem;
                border-bottom: 1px solid #f0f0f0;
                .broadcast{
                    .common;
                    background-image: url('./../../assets/laba.png');
                }
                .time{
                    .common;
                    background-image: url('./../../assets/clock.png');
                }
                .address{
                    .common;
                    background-image: url('./../../assets/dizhi.png');
                }
                .img{
                    .common;
                    background-image: url('./../../assets/tupian.png');
                }
            }
        }
        .other{
            background-color: #fff;
            margin-top: 10/@rem;
            font-size: 14/@rem;
            p{
                width: 92%;
                display: inline-block;
                margin-left: 10/@rem;
                line-height: 16/@rem;
                word-wrap: break-word;
                margin-top: 10/@rem;
                .brand{
                    .common;
                    background-image: url("./../../assets/pai.png");
                }
                .pay{
                    .common;
                    background-image: url("./../../assets/fu.png");
                }
                .ticket{
                    .common;
                    background-image: url("./../../assets/piao.png");
                }
            }
        }
    }
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
