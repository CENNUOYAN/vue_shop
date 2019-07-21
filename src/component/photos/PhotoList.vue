<template>
    <div class="photo-container">
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id===0?'mui-active': '']" @click="getPhotoList(item.id)" data-wid="tab-top-subpage-1.html" 
                    v-for="item in categorys" :key="item.id">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!-- 图片列表 -->
        <ul class="photo-list">
            <router-link v-for="item in photolist" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h3 class="info-title">{{item.title}}</h3>
                    <div class="info-body">
                        {{item.zhaiyao}}
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js' //初始化滑动控件
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            categorys: [],
            photolist: []
        }
    },
    created(){
        this.getPhotoCategorys();
        this.getPhotoList(1);
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        this.getPhotoCategorys(1);
    },
    methods: {
        getPhotoCategorys(){
            this.$http.get('/api/getimgcategory').then(result => {
                if(result.body.code === 200 ){
                    //result.body.message.unshift({title: '全部',id: 0})
                    this.categorys = result.body.message;
                    //this.categorys.splice(1,3);
                    // this.categorys.push({title: '现代美女'})
                }
                else {
                    Toast('加载失败！');
                }
            })
        },
        getPhotoList(cateId){
            console.log(cateId)
            this.$http.get('/api/getimages/'+cateId).then(result => {
                if(result.body.code === 200){
                    this.photolist = result.body.message;
                }
                else {
                    Toast('加载失败！');
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
*{
    touch-action: pan-y;
}
#slider .mui-slider {
    position: fixed;
    z-index: 99;
}
.photo-list {
    list-style: none;
    margin: 0;
    padding: 10px;
    img {
        width: 100%;
        vertical-align: middle;
    }
    li {
        background-color: #ccc;
        margin-bottom: 10px;
        position: relative;
        image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
        }

        .info {
            color: #fff;
            position: absolute;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.3);
            padding-left: 6px;
            max-height: 88px;
            .info-title {
                font-size: 14px;
                margin: 6px;
            }
            .info-body{
                font-size: 12px;
                text-indent: 1.5em;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
