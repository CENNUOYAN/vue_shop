<template>
    <div class="cartbox-container">
        <div class="mui-numbox" data-numbox-min='1' >
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" v-model="initCount" @change="CountChanged" ref="numbox"/> 
            <!-- 将v-model改为v-bind:value也可以 -->
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["count","initCount","id"],
    methods: {
        CountChanged(){
            console.log(this.$refs.numbox.value+"-------"+this.id)
            var updateCount = {
                id: this.id,
                count: this.$refs.numbox.value
            }
            this.$store.commit('updateStoreCount',updateCount)
        }
    }
}
</script>

<style lang="scss" scoped>
.cartbox-container {
    margin-right: 4px;
    .mui-numbox {
        height: 22px;
       // width: 110px;
    }
}

</style>
