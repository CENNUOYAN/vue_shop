import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

const store = new Vuex.Store({
    state: {
        car: car,
    },
    getters: {
        getAllCount(state) {  //还可以将其他getters作为第二个参数
            var count = 0;
            state.car.forEach(item => {
                count += parseInt(item.count);  
                //count = parseInt(count + item.count);
            })
            //console.log("getters:"+count)
            return count;
        },
        getProductCountToCartBox(state) {
            return (id) => {
                state.car.forEach(item => {
                    if(item.id === id){
                        count = item.count
                    }
                })
                return count
            }
        },
        getProductSelectedToCart(state){
            var o = {}
            state.car.forEach(item => [
                o[item.id] = item.selected
            ])
            return o
        },
        getSelectedProductPrice(state) {
            var totalPrice = 0
            state.car.forEach(item => {
                if(item.selected === true){
                    totalPrice += (item.price*item.count)
                }
            })
            return totalPrice
        },
        judgeAllSelected(state) {
            var flag = true
            state.car.some(item => {
                if(item.selected === false){
                    flag = false
                    //console.log("test:"+item.selected)
                    return true
                }
            })
            //console.log("result:"+flag)
            return flag
        }
    },
    mutations: {
        addToCar(state, product){
            // state.count = parseInt(state.count) + parseInt(count)
            // console.log("store:"+state.count)
            var flag = false;
            state.car.some(item => {
                if(item.id === product.id){  //判断此时购物车是否有该商品
                    item.count = parseInt(item.count) + parseInt(product.count);
                    flag = true;  //已有该商品
                    // console.log("has");
                    // console.log("has:"+state.car)
                    return true;
                }
            })
            if(!flag) { //购物车没有该商品
                state.car.push(product);
                // console.log("not has")
            }
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateStoreCount(state,updateCount){
            state.car.some(item => {
                if(item.id === updateCount.id){
                    item.count = parseInt(updateCount.count)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateStoreSelected(state, productSelected){
            state.car.some(item => {
                if(item.id === productSelected.id){
                   // console.log(item.selected)
                    item.selected = productSelected.selected
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        selectAllProducts(state, checkboxFlag) {
            state.car.forEach(item => {
                item.selected = checkboxFlag
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        deleteProduct(state,id) {
            
            state.car.some((item,index) => {
                if(item.id === id){
                    state.car.splice(index,1)
                }
              
            })
            console.log("store:"+id+"------"+state.car)
            localStorage.setItem('car', JSON.stringify(state.car))
        }
        
    },

})
export default store