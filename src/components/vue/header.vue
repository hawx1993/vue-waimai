<template>
    <header class="hd-wrapper">
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
    </header>

</template>
<style lang="less" rel="stylesheet/less">
    @import "../less/common.less";

    header{
        position: fixed;
        background: #91618e;
        background: url(//www.dpfile.com/mod/app-m-waimai-mainchannelnew/1.1.14/css/img/header.png);
        padding: 1em 0;
        height: 50/@rem;
        color: #fff;
        text-align: left;
        left: 0;
        right: 0;
        top: 0;
        z-index: 100;
        background-size: cover;
        .shop-header{
            display: -webkit-flex;
            display: flex;
            -webkit-align-items: center;
            align-items: center;
            width: 100%;
            .shop-item{
                width: 60%;
                padding-left: 10/@rem;
                .sub-title-holder{
                    line-height: 20/@rem;
                    p{
                        padding: 0 5/@rem;
                        display: inline-block;
                        font-size: 12/@rem;
                        line-height: 10/@rem;
                        border-right: 1px solid #fff;
                    }
                    p.subtitle:nth-last-of-type(1){
                        border-right: none;
                    }
                }
                .delivery-msg{
                    font-size: 12/@rem;
                    line-height: 22/@rem;
                    padding: 1/@rem 20/@rem 1/@rem 5/@rem;
                    position: relative;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    cursor: pointer;
                }
            }
            img{
                display: inline-block;
                float: left;
                width: 45/@rem;
                height: 45/@rem;
                border-radius: 100%;
                border: 2px solid #ac98ad;
                margin-left: 20/@rem;
            }
        }
    }
</style>
<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                shop: {}
            }
        },
        created(){
            axios.get('static/data.json').then((res)=>{
                this.shop = res.data.data.shopInfo;
            })
        },
        components:{

        }
    }
</script>
