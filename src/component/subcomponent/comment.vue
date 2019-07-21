<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <textarea placeholder="请输入您的评价（最多120字）" maxlength="120" v-model='msg'></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评价</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="item in comments" :key="item.id">
                <div class="comment-title">
                    <span>用户：{{item.user_name}}&nbsp;&nbsp;</span> <span>发表时间：{{item.add_time | dateFormat}}</span>
                </div>
                <div class="comment-body">
                    {{item.content ==='undefined'?'此用户很赖，没有评论': item.content}}
                </div>
            </div>
        </div>
        <!-- <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button> -->
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            pageIndex: 1,
            comments: [],
            msg: ''
        }
    },
    props: ['id'],
    created() {
        this.getComment()
    },
    methods: {
        getComment(){
            this.$http.get("/api/getcomments").then(result=>{
                if(result.body.code===200){
                    // this.comments = result.body.message; //不能用赋值，用数组concat
                    this.comments = this.comments.concat(result.body.message);
                    console.log(result.body.message)
                }else{
                    Toast('加载评论失败！')
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getComment();
        },
        postComment(){
            if(this.msg.trim().length === 0){
                return Toast('评论内容不能为空！')
            }
            this.$http.post('/api/postcomment',{
                content: this.msg.trim()
            }).then(result => {
               // console.log("content is:"+JSON.parse(result.body.data[0]).content)
                if(result.body.code === 200){
                    var cmt = {
                        user_name: '匿名用户',
                        add_time: Date.now(),
                        content: this.msg.trim()
                    };
                    this.comments.unshift(cmt);
                    this.msg = ''
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.comment-container {
    h3 {
        font-size: 16px;
    }
    textarea {
        height: 85px;
        font-size: 13px;
        margin: 0;
    }
    .comment-list {

        .comment-title {
            background-color: #ccc;
            margin: 3px 0;
            line-height: 30px;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            padding: 0 3px;
        }
        .comment-body {
            line-height: 35px;
            text-indent: 0.5em;
        }
    }
}
</style>
