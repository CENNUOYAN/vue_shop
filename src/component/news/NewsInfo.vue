<template>
    <div class="newsinfo-container"> 
        <div class="title">{{newsinfo.title}}</div>
        <p class="subtitle">
            <span>发表时间: {{newsinfo.add_time | dateFormat}}</span>
            <span>点击: {{newsinfo.click}}次</span>
        </p>
        <hr/>
        <div class="content" v-html="newsinfo.content"></div>
        <comment :id="this.id"></comment>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
import comment from '../subcomponent/comment.vue'
export default {
    data() {
        return{
            id: this.$route.params.id,
            newsinfo: {}
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo() {
            this.$http.get("/api/getnew/"+this.id).then(result => {
                if(result.body.code === 200){
                    this.newsinfo = result.body.message[0]
                }
                else{
                    Toast('加载新闻详情信息失败！')
                }
            })
        }
    },
    components: {
        comment
    }
}
</script>
<style lang="scss" scoped>
.newsinfo-container {
    .title {
        font-size: 18px;
        color: red;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle {
        color: #226aff;
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        margin: 0 5px;
    }
    .content {
        margin: 0 5px;
    }
}
</style>

