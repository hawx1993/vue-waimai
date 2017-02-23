<template>
    <div class="m-shopInfo">
        <div class="shopName">
            <div class="shop-item">
                <p>{{ shopInfo.shopName }}</p>
                <p>
                    <span></span>
                    <span>{{shopInfo.sold}}</span>
                </p>
            </div>
            <div class="shop-tel"></div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    @import "./../less/common.less";
    .m-shopInfo{
        background-color: #f0f0f0;
        .shopName{
            padding: 10/@rem 0;
            background: #fff;
            border-bottom: 1px solid #f0f0f0;
        }
    }
</style>
<script>
    import axios from 'axios'
    import flexible from './../../lib/flexible'
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

        }
    }
</script>
