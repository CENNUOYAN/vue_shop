<template>
    <div class="productlist-container">
        <router-link :to="'/home/productinfo/'+item.id" class="productitem" v-for = "item in productslist" :key="item.id">
            <!-- 图片 -->
            <img :src="item.img_url">
            <!-- 产品名 -->
            <h1 class="title">{{item.title}}</h1>
            <div class="productinfo">
                <!-- 价格 -->
                <div class="price">
                    <span class="shop">¥{{item.sell_price}}</span>
                    <span class="market">¥{{item.market_price}}</span>
                </div>
                <div class="surplus">
                    <span>热卖中</span>
                    <span>剩余{{item.stock_quantity}}件</span>
                </div>
            </div>
        </router-link>
        <!-- <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button> -->
    </div>
</template>

<script>
export default {
    data() {
        return{
            pageindex: 1,
            productslist: []
        }
    },
    created(){
      //  this.getProductsList();
        this.getProductList();
    },
    methods: {
        getProductList(){
            this.$http.get('/api/productList').then(r=>{
                if(r.body.code === 200){
                    console.log(r);
                     this.productslist = r.body.productlist;
                   // this.productslist = this.productslist.concat(result.body.message);
                }
            })
        },
        getMore(){
            this.pageindex++;
            this.getProductsList();
        }
    }
}
</script>

<style lang="scss" scoped>
.productlist-container {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    .productitem{
        color: #000;
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #eee;
        margin-bottom: 4px;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            width: 100%;
        }
        h1 {
            font-size: 14px;
        }
        .productinfo{
            background-color: #eee;
            .price {
                padding-top: 5px;
            }
            .shop{
                margin-left: 8px;
                color: red;
                font-weight: bold;
            }
            .market {
                text-decoration: line-through;
                font-size: 14px;
                margin-left: 10px;
                color: #ccc;
            }
            .surplus {
                padding: 6px;
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                color: #333;
            }
        }
    }
}
</style>

