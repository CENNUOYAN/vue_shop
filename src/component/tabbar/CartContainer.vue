<template>
    <div class="cart-container">

        <!-- <div class="car-item-lib">
            <div class="car-item">
                <input type="radio" @click="toggleRadio" ref="radio" name="" id="radio">
                <img src="http://dummyimage.com/200x200/894FC4" alt="">
                <div class="info">
                    <div class="title">[折扣价]背包男士休闲旅行双肩案方</div>
                    <div class="price">
                        <span class="shop">¥100</span><span class="market">¥200</span>
                    </div>
                </div>
            </div>
        </div> -->
        
        <!-- 商品列表 -->
        <div class="products-list">
             <div class="mui-card" v-for="(item,index) in products" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch ref="switch" v-model="$store.getters.getProductSelectedToCart[item.id]" @change="selected(item.id,$store.getters.getProductSelectedToCart[item.id])"></mt-switch>
                        <img src="http://dummyimage.com/200x200">
                        <div class="info">
                            <div class="title">{{item.title}}</div>
                            <div class="body">
                                <span class="price">¥&nbsp;{{item.price}}</span>
                                <numbox :count="item.count" :id="item.id"   :initCount="$store.getters.getProductCountToCartBox(item.id)"></numbox>
                                <a href="javascript:;" @click="deleteProduct(item.id,index)">删除</a>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="show" v-if="flag">
            <div class="body">
                <p>购物车竟然是空的</p>
                <span>在忙,也要记得买点东西犒赏自己~</span>
            </div>
        </div>
        <!-- 结算区域 -->
        <div class="mui-card computed">
            <div class="mui-card-content">
                <div class="mui-card-content-inner item">
                    <div class="select">
                        <input type="checkbox" v-model="checkboxFlag" 
                            @change="changeCheckBox(checkboxFlag)" id="selectAll">
                        <label for="selectAll">
                            <!-- <span :class="['glyphicon',$store.getters.judgeAllSelected&&checkboxFlag ? 'glyphicon-ok-circle'
                            : 'glyphicon glyphicon-record']" aria-hidden="true"></span> -->
                            <span :class="['glyphicon',$store.getters.judgeAllSelected? 'glyphicon-ok-circle'
                            : 'glyphicon glyphicon-record']" aria-hidden="true"></span>
                        </label>
                        <span>全选</span>
                    </div>
                    <div class="total">
                        <span>总计:</span><span class="price">¥ {{$store.getters.getSelectedProductPrice}}</span>
                        <button>结算</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from '../subcomponent/cartNumberBox.vue'
export default {
    data(){
        return{
            radioFlag: true,
            products: [],
            flag: false,
            selectedFlag: true,
            checkboxFlag: false
        }
    },
    created(){
        this.getCartProductsList()
    },
    methods: {
        getCartProductsList(){
            var car = JSON.parse(localStorage.getItem('car'))
            if (car !== null){
                this.products = car
            }
            else {
                console.log("aaa")
                this.flag = true;
            }
            console.log(this.products)
        },
        toggleRadio() {
            // var radio = document.getElementById('radio');  //原生js操作dom
            // radio.checked = this.radioFlag;
            // this.radioFlag = !this.radioFlag
            // console.log(radio.checked)
            this.$refs.radio.checked = this.radioFlag;
            this.radioFlag = !this.radioFlag;
            console.log(this.$refs.radio.checked);
        },
        selected(id,selectedFlag){
            var productSelected = {id: id, selected: selectedFlag }
            this.$store.commit('updateStoreSelected', productSelected)
            console.log(id+"------"+selectedFlag)
        },
        changeCheckBox(checkboxFlag){
            //console.log(checkboxFlag)
            this.$store.commit('selectAllProducts', checkboxFlag)
        },
        deleteProduct(id,index){
            console.log(id+"---"+index)
            this.products.splice(index,1)
            this.$store.commit('deleteProduct',id)
        }
    },
    components: {
        numbox
    }
}
</script>

<style lang="scss" scoped>
.cart-container {
    background-color: #f8f8f5;
    overflow: hidden;
    
    .show {
        display: flex;
        height: 550px;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        .body {
            p {
            font-size: 19px;
            color: #000;
            }
            span {
                font-size: 14px;
                color: #888;
            }
        }
    }
    .products-list {
        height: 616px;
    }
    .mui-card-content-inner {
        display: flex;
        align-items: center;
        img {
            width: 40px;
            height: 50px;
            margin: 0 6px;
        }
        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
                font-weight: 600;
                font-size: 13px;
            }
            .body {
                display: flex;
                .price {
                    color: red;
                    padding-right: 6px;
                }
                a {
                    display: inline-block;
                    width: 60px;
                    height: 22px;
                    text-align: center;
                    background-color: red;
                    border: 1px solid red;
                    color: #fff;
                    border-radius: 20px;
                }
            }
        }
    }
    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .computed {
        position: fixed;
        bottom: 50px;
        width: 100%;  
        margin: 0;
        border-top: 1px solid #ccc;
    }
    .glyphicon-ok-circle {
        color: red;
        font-size: 18px;
    }
    .glyphicon-record {
        font-size: 18px;
    }
    .computed .mui-card-content-inner{
        padding: 5px;
    }
    .total {
        .price {
            color: red;
        }
        button {
            vertical-align: middle;
            margin-left: 6px;
            color: #fff;
            border-radius: 6px;
            background-color: blue;
        }
    }
#selectAll {
    visibility: hidden;
}
}
// .cart-container {
//     background-color: #eee;
//     overflow: hidden;
//     hr {
//         margin: 0;
//         border: 0;
//     }
//     .car-item-lib {
//         margin: 8px;
//         box-shadow: 0 0 3px #999;
//         background-color: #fff;
//     }
//     .car-item {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         padding: 16px;
//         img {
//             width: 60px;
//             height: 60px;
//             margin: 0 10px;
//         }
//     }
//     input {
//             width: 50px;
//             height: 50px;
//             margin: 0 10px;
//         }
//     .market {
//         text-decoration: line-through;
//         color: #888;
//         padding-right: 16px;
//     }
//     .shop {
//         color: red;
//         font-weight: bold;
//         font-size: 16px;
//     }
// }

// #radio {
//     transform: scale(5,5);
// }
</style>
