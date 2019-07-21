<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' >
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="CountChanged" ref="numbox"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        CountChanged(){
            //console.log(this.$refs.numbox.value)
            this.$emit('sendMsgToParent', this.$refs.numbox.value)
        }
    }
}
</script>

<style>

</style>
