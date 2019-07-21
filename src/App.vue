<template>
    <div class="app-container">
        <!-- 顶部区域 -->
        <mt-header fixed title="网上商城">
            <router-link to="" slot="left">
                <mt-button icon="back" @click="goBack"></mt-button>
            </router-link>
        </mt-header>
        <!-- 中间的路由 router-view 区域 -->
        <transition>
            <router-view></router-view>
        </transition>
        <!-- 底部区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item-1" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge" id="carnum">{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-1" to="/personal">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-bar-tab .mui-tab-item-1.mui-active { //修改。mui-tab-item样式，解决tarbar无法切换问题
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mint-header.is-fixed {
    position: fixed;
        z-index: 999;
}

.app-container {
    h1 {
            margin-top: 20px;
        }
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
    .mint-header {
        
    }
    // .mint-header-title {
    //     margin: 6px;
    // }
}
.v-enter {
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}
</style>


