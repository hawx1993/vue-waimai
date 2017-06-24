<template>
    <div class="star">
        <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" key="index"></span>
    </div>
</template>

<script type="text/ecmascript-6">
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';

    export default {
        props: {
            score: {
                type: Number
            }
        },
        computed: {
            itemClasses() {
                let result = [];
                let score = Math.floor(this.score * 2) / 2;
                let hasDecimal = String(this.score).indexOf(".")>-1;
                let integer = Math.floor(score);
                for (let i = 0; i < integer; i++) {
                    result.push(CLS_ON);
                }
                if (hasDecimal) {
                    result.push(CLS_HALF);
                }
                while (result.length < LENGTH) {
                    result.push(CLS_OFF);
                }
                return result;
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    @import "../less/common.less";
    .star{
        display: inline-block;
        .star-item{
            background-image: url(./../../assets/evaluatestars.png);
            width: 12/@rem;
            height: 12/@rem;
            float: left;
            margin-right: 1/@rem;
            background-position: 40% 5.66%;
            background-size: 126% 379%;
        }
        .star-item.half{
            background-position: 40% 50.943%;
        }
        .star-item.off{
            background-position: 40% 96.226%;
        }
    }
</style>
