<!--  -->
<template>
<div class='loading flex-justify-center flex-items-center'>
    <div class="flex-justify-center flex-items-center loading-box">
        <img src="../assets/images/ic_loading.png" alt="" srcset="">
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

},
}
</script>
<style lang='stylus' scoped>
    .loading{
        width 100%
        height 100vh
        position fixed 
        left 0
        top 0
        right 0
        bottm 0
        .loading-box{
            width 82px
            height 82px
            border-radius 22px
            box-shadow: 0 4px 10px 0 rgba(0,0,0,0.15);
            background #fff
            
            img{
                width 48px
                height 48px
                animation: animate 0.8s linear infinite;
            }
        }
        @keyframes animate{
            0%{
                transform rotate(0deg)
            }
            100%{
                transform  rotate(360deg)
            }
        }
    }
</style>