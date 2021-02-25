<!-- 列表为空 -->
<template>
    <div class='fail flex-justify-center flex-items-center flex-column'>
            <img src="../assets/images/ic_repair.png" alt="" srcset="" class="repair">
            <div class="empty-content fs-16 mt-20">
                {{$t("sorry")}}
            </div>
        
    </div>
</template>

<script>

export default {
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},
mounted() {

}
}
</script>
<style lang='stylus' scoped>
    .fail{
        height 100vh
        .repair{
            width 50px
            height 50px
        }
        .empty-content{
            width 311px
            text-align center
            line-height 21px
        }
    }
</style>