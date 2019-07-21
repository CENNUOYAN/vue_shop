<template>
    <div class="productinfo-container">
        <!-- 小球 -->
        <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>    
        </transition>
        
        <!-- 轮播图区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swipe :swipeList="productSwipe" :isfull="false"></swipe>
					</div>
				</div>
		</div>
        <div class="mui-card">
            <div class="mui-card-header">{{productInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        市场价：<span class="market">¥{{productInfo.market_price}}</span>
                        销售价：<span class="shop">¥{{productInfo.sell_price}}</span>
                    </div>
                    <div class="buynum">
                        <span>购买数量：</span><numbox @sendMsgToParent = "getSonCount"></numbox> 
                    </div>
                    <mt-button type="danger" size="small">立即购买</mt-button>
                    <mt-button type="primary" size="small" @click="addToCar">加入购物车</mt-button>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        商品货号：<span>{{productInfo.goods_no}}</span>
                    </div>
                    <div class="price">
                        库存情况：{{productInfo.stock_quantity}}
                    </div>
                    <div>
                        上架时间：{{productInfo.add_time | dateFormat}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import swipe from '../subcomponent/swipe.vue'
import numbox from '../subcomponent/productNumberBox.vue'
import { Toast } from "mint-ui"
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{
            productSwipe: [],
            productInfo: {},
            count: 1,
            max: 10,
            ballFlag: false
        }
    },
    watch: {
        max: function(newVal,oldVal){
            console.log("num is:"+newVal),
            mui('.mui-numbox').numbox().setOption('max',newVal) //设置最大购买数，及商品的库存数
        },
        count: function(newVal, oldVal){
            //console.log("parent:"+newVal);
        }
    },
    created(){
        this.getProductInfo();
        this.getProducSwipe();
        //this.getTest()
    },
    mounted(){
        mui('.mui-numbox').numbox()
    },
    methods: {
        getSonCount(count){
            //console.log("son:"+count);
            this.count = count;

        },
        getProducSwipe(){
            this.$http.get('/api/getSwipeImages').then(r => {
                if(r.body.code === 200){
                    console.log(r.body.message[0].img_url)
                    this.productSwipe = r.body.message
                    // this.productSwipe.forEach(item =>{
                    //     item.img = item.src;
                    // } )
                }
                else{
                    Toast('请重新刷新页面')
                }
            })
        },
        getTest(){
            this.$http.get('http://test.com').then(r => {
            console.log(r)
            })
        },
        getProductInfo(){
            this.$http.get('/api/product/'+this.$route.params.id).then(result => {
                if(result.body.code === 200){
                    
                    this.productInfo = result.body.message[0],
                    this.max = this.productInfo.stock_quantity;
                }
                else{
                    Toast('请重新刷新页面')
                }
            })
        },
        addToCar(){
            this.ballFlag = true;
            Toast('添加购物车成功!');
            //console.log("parent:"+this.count);
            var product = {
                id: this.$route.params.id,
                title: this.productInfo.title,
                price: this.productInfo.sell_price,
                count: this.count,
                selected: false
            }
            this.$store.commit('addToCar', product)
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)"
        },
        enter(el,done){
            const ballLocation = this.$refs.ball.getBoundingClientRect();
            const carNumLocation = document.getElementById('carnum').getBoundingClientRect();
            const x = carNumLocation.left - ballLocation.left;
            const y = carNumLocation.top - ballLocation.top;

            // el.style.transform = "translate(88px, 284px)";
            el.style.transform = `translate(${x}px, ${y}px)`;
            el.style.transition = "all 1s cubic-bezier(0.42,-0.3,1,0.68)";
            done();
        },
        afterEnter(el){
            this.ballFlag = false;
        }
    },
    components: {
        swipe,
        numbox
    }
}
</script>

<style lang="scss" scoped>
.productinfo-container {
    background-color: #eee;
    padding: 6px;
}
.mui-card {
    margin: 0;
    padding-top: -20px;
    margin-bottom: 10px;
    .price {
        margin-bottom: 10px;
    }
    .market {
        text-decoration: line-through;
        color: #888;
        padding-right: 16px;
    }
    .shop {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
    .buynum {
        margin: 10px 0;
        display: flex;
        align-items: center;
    }
}
.ball {
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    left: 150px;
    top: 338px;
}
</style>

