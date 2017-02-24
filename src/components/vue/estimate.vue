<template>
    <div class="comment-wrap">
        <div class="m-comment">
            <ul class="info-left">
                <li class="info-score">{{ cmt.integratedScore }}</li>
                <li class="info-desc">综合评分</li>
                <li class="info-good">{{ cmt.praiseRatio }}</li>
            </ul>
            <ul class="info-right">
                <li class="info-star">
                    配送评分
                    <p>
                        <star :score="cmt.deliveryScore"></star>
                        <span>{{ cmt.deliveryScore }}</span>
                    </p>
                </li>
                <li class="info-star">
                    商家评分
                    <p>
                        <star :score="cmt.shopScore"></star>
                        <span>{{cmt.shopScore}}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>

</template>
<style lang="less" rel="stylesheet/less">
    @import "../less/common.less";
    .comment-wrap{
        background-color: #f0f0f0 !important;
        color: #333;
        font-size: 12/@rem;
        z-index: 11111;
        .m-comment{
            display: -webkit-box;
            width: 100%;
            margin: 10/@rem 0;
            background-color: #fff;
            .info-left{
                margin: 15/@rem 0 15/@rem;
                text-align: center;
                width: 40%;
                border-right: 1/@rem solid #d8d8d8;
                .info-score{
                    line-height: 32/@rem;
                    font-size: 35/@rem;
                    color: #FEC520;
                }
                .info-desc{
                    line-height: 21/@rem;
                    font-size: 14/@rem;
                    color: #656565;
                }
                .info-good{
                    color: #A9A9A9;
                    font-size: 11/@rem;
                    line-height: 15/@rem;
                }
            }
            .info-right{
                margin: 15/@rem 0 15/@rem;
                text-align: center;
                width: 60%;
                .info-star{
                    margin-bottom: 18/@rem;
                    margin-top: 5/@rem;
                    p{
                        display: inline-block;
                        height: 12/@rem;
                        margin: 5/@rem 5/@rem 0 10/@rem;
                        .delivery-star{
                            background: url("//www.dpfile.com/mod/app-m-waimai-mainchannelnew/1.1.14/css/img/evaluatestars.png") 40% 5.66% no-repeat;
                            width: 12/@rem;
                            height: 12/@rem;
                            float: left;
                            margin-right: 1/@rem;
                            background-size: 126% 379%;
                        }
                    }

                }
            }
        }
    }
</style>
<script>
    import star from './star';
    import '../../lib/flexible';
    import axios from 'axios';

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
                cmt:{}
            }
        },
        created(){
            axios.get('static/shopComment.json').then((res)=>{
                this.cmt = res.data.data;
            })
        },
        components:{
            star
        }
    }
</script>
