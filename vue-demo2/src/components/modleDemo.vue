<template>
    <div>
        <form>
            <input type="text" v-model="message"></input>
            <p>{{ message }}</p>
        </form>
        <!-- v-model 双向绑定数据
     v-bind 单向绑定数据
     v-on 监听事件
     修饰符
     v-model.lazy 懒加载
     v-model.number 转换为数字
     v-model.trim 去掉首尾空格
    -->
    </div>
    <div>
        <button @click="getElementHandle">获取DOM节点</button>
        <p ref="container" class="container">未获取</p>
        <!--使用ref获取DOM节点-->
    </div>

</template>
<script>
export default {
    data() {
        return {
            message: '',
        }
    },
    methods: {
        getElementHandle() {
            console.log(this.$refs.container.innerHTML="获取成功")
        }
    }

}


</script>