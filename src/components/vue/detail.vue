<template lang="html">
    <div class="m-container">
        <v-header></v-header>

    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import "../less/common.less";
    .m-container{

    }
</style>
<script>
    import '../../lib/flexible';
    import header from 'components/vue/header'
    import axios from 'axios'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },

        components: {
            'v-header': header
        }
    }
</script>
