<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipeList" :key="item.id">
                <img :src="item.img" :class="{'full':isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>  
</template>

<script>
export default {
    props: ["swipeList","isfull"]
}
</script>

<style <style lang="scss" scoped>
.mint-swipe {
    height: 150px;

    .mint-swipe-item {
        text-align: center;
        // &:nth-child(1) {
        //     background-color: red;
        // }
        // &:nth-child(2) {
        //     background-color: blue;
        // }
        // &:nth-child(3) {
        //     background-color: purple;
        // }
        background-color: #fff;
        img {
            // width: 100%;
            height: 100%;
        }
    }
}
.full {
    width: 100%;
}
</style>
