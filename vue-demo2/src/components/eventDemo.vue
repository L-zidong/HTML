<template>
    <h2>事件和数组变化侦测</h2>
    <div>
        <!--事件处理 -->
        <button @click="handleClick">click</button>
        <p>{{ count }}</p>
    </div>
    <div>
        <!--事件传参 -->
        <!--可以同时传递参数和事件-->
        <p @click.stop="getNameHandle(item, $event)" 
        v-for="(item, index) of names" :key="index">{{ item }}</p>
    </div>
    <div>
        <!--事件修饰符-->

        <!--.stop阻止事件冒泡-->
        <!--.prevent 阻止默认事件-->
        <!--.once 只执行一次-->
        <!--.capture 捕获-->
        <!--.self 阻止事件自身-->
        <!--.passive 忽略默认行为-->
        <a href="https://www.baidu.com" @click.prevent="getNameHandle">百度</a>
        <!--点击链接后不会跳转，阻止了默认事件-->
    </div>
    <div>
        <button @click="connectHandle">合并数组</button>
        <ul>
            <h3>数组1</h3>
            <li v-for="(item, index) of numbs1" :key="index">{{ item }}</li>
            <h3>数组2</h3>
            <li v-for="(item, index) of numbs2" :key="index">{{ item }}</li>
        </ul>
        <!--数组变更方法:push(),pop(),shift(),unshift(),splice(),sort(),reverse()-->
        <!--数组替换方法:filter(),concat(),slice(),map();总是返回新数组-->
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
            names: ['张三', '李四', '王五'],
            numbs1: [1, 2, 3, 4, 5],
            numbs2: [6, 7, 8, 9, 10],
        }
    },
    methods: {
        handleClick() {
            //读取data里的数据用this.
            this.count++
        }
        ,
        getNameHandle(item, event) {
            console.log(item)
            console.log(event)
        }
        ,
        connectHandle() {
            this.numbs1 = this.numbs1.concat(this.numbs2)
        }
    }
}
</script>