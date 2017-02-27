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
        <div class="m-cmtType">
            <span v-for="item in cmt.commentLabels">{{ item.content }}</span>
        </div>
        <ul class="evaluate-wrap">
            <li  v-for="item in list" class="evaluate-list">
                <div class="content">
                    <div class="evaluate-left">
                        <img :src="item.userPicUrl || defaultUserPic" alt="">
                    </div>
                    <div class="evaluate-right">
                        <p class="evaluate-sub">
                            <span class="name">{{ item.userName || '美团外卖用户' }}</span>
                            <span class="time">{{ item.commentTime }}</span>
                        </p>
                        <p class="evaluate-star">
                            <star :score="item.score"></star>
                            <span class="ship-time">{{ item.deliveryTime }}</span>
                        </p>
                        <p class="evaluate-comment">
                            {{ item.content }}
                        </p>
                        <div class="evaluate-pic" v-if="item.pictures" >
                            <img :src="pic.smallPicUrl" v-for="pic in item.pictures" alt="">
                        </div>
                        <p class="evaluate-label">
                            <i class="label" v-if="item.label"></i>
                            {{ item.label }}
                        </p>
                        <p class="add-comment" v-if="item.shopReply">
                            {{ item.shopReply }}
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import "../less/common.less";
    @import "../less/estimate.less";
</style>
<script>
    import star from './star';
    import '../../lib/flexible';
    import axios from 'axios';

    export default{
        data(){
            return{
                cmt:{},
                list:[],
                defaultUserPic: 'http://xs01.meituan.net/waimai_i/img/friend/userpic_defalut.c741e924.png'
            }
        },
        created(){
            axios.get('static/shopComment.json').then((res)=>{
                this.cmt = res.data.data;
                this.list = res.data.data.list;
            })
        },
        components:{
            star
        }
    }
</script>
