<template>
    <div>
        <v-menu></v-menu>
        <v-goods></v-goods>
    </div>
</template>
<style  lang="less" rel="stylesheet/less">

</style>
<script>
    import menu from 'components/vue/menu.vue'
    import goods from 'components/vue/goods.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'v-menu': menu,
            'v-goods': goods,
        }
    }
</script>
