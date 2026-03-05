<template>
    <h3>侦听器</h3>
    <p>{{ message }}</p>
    <button @click="updateHandle">修改数据</button>

</template>
<script>
export default {
    data() {
        return {
            message: 'hello world'
        }
    },
    methods: {
        updateHandle() {
            this.message = this.message === 'hello world' ? 'hello vue' : 'hello world'
        }
    },
    watch: {
        /**
         * 监听message数据属性的变化
         * 函数名必须与监听对象的属性名一致
         * 当message的值发生变化时触发此函数
         * @param {*} newValue - message的新值
 * @param {*} oldValue - message的旧值
         */
        message(newValue, oldValue) {
            console.log('newValue:', newValue)
            console.log('oldValue:', oldValue)
        }
    }
}
</script>