<template>
    <div>
        <!-- 轮播图区域 -->
        <swipe :swipeList="swipeList" isfull="true"></swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/productlist">
                    <img src="../../images/menu3.png" alt="商品购买">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="新闻资讯">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoslist">
                    <img src="../../images/menu2.png" alt="图文分享">
                    <div class="mui-media-body">图文分享</div></router-link></li>
            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="视频专区">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="留言反馈">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="联系我们">
                    <div class="mui-media-body">联系我们</div></a></li> -->
        </ul> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
import swipe from '../subcomponent/swipe.vue'
export default {
    data() {
        return{
            swipeList: []
        }
    },
    created() {
        // this.getSwipe();
        this.getSwipeImages();
    },
    methods: {
        // getSwipe(){
        //     this.$http.get("api/getlunbo").then(result => {
        //         if(result.body.status ===0 ){
        //             this.swipeList = result.body.message;
        //             // console.log(this.swipeList)
        //         }else{
        //             Toast('加载轮播图失败！')
        //         }
        //     })
        // },
        getSwipeImages(){
            this.$http.get('/api/getSwipeImages').then(r=>{
                if(r.body.code === 200){
                    this.swipeList = r.body.message;
                    console.log(r)
                }else {
                    
                }
            })
        },
    },
    components: {
        swipe,
    }
}
</script>
<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
    background-color: #ffffff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
    img {
        height: 60px;
        width: 60px;
    }
}
</style>
