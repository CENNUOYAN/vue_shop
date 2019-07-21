<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active">
							推荐
						</a>
						<a class="mui-control-item">
							运动
						</a>
						<a class="mui-control-item" >
							男装
						</a>
						<a class="mui-control-item">
							女装
						</a>
						<a class="mui-control-item">
							手机
						</a>
                        <a class="mui-control-item">
							百货
						</a>
						<a class="mui-control-item">
							电器
						</a>
					</div>
				</div>

			</div>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js' //初始化滑动控件
export default {
    created(){
        
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
*{
    touch-action: pan-y;
}
</style>
