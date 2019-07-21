
<template>
    <div class="photoinfo-container">
        <div class="header-title">{{photoinfo.title}}</div>
        <div class="header-body">
            <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
        </div>
        <hr/>
        <!-- 缩略图区域 -->
        <vue-preview class="thum" :slides="slide1"  @close="handleClose"></vue-preview>
        <div class="content" v-html="photoinfo.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            photoinfo: {},
            slide1: []
        }
    },
    created(){
        this.getPhotoInfo(),
        this.getThumImages()
    },
    methods: {
        getPhotoInfo(){
            this.$http.get('/api/getimageInfo/'+this.$route.params.id).then(result => {
                if(result.body.code === 200){
                    console.log(result.body.message)
                    this.photoinfo = result.body.message[0];
                }
            })
        },
        getThumImages(){
            this.$http.get('/api/getthumimages/'+this.$route.params.id).then(result => {
                if(result.body.code === 200){
                    console.log(result.body.message)
                    
                    this.slide1 = result.body.message;
                    this.slide1.forEach(element => {
                        element.w = 600;    //使用vue-preview必须具有src，msrc，w，h 4个属性，其中src属性在api已经有了
                        element.h = 400;
                        element.msrc = element.src;
                    });
                }
            })
        },
         handleClose () {
            console.log('close event')
        }
    }
}
</script>

<style lang="scss" >

.photoinfo-container {
    figure {  //不能设为私有样式，否则不能更改figure样式
        margin: 10px;
        img {
            width: 100%;

        }
    }
    .header-title {
        text-align: center;
        font-size: 14px;
        color: #226aff;
        margin: 10px 0 16px 0;
        font-weight: 600;
    }
    .header-body {
        font-size: 12px;
    }
    .content {
        text-indent: 1.5em;
        font-size: 14px;
        line-height: 30px;
    }
}
</style>

