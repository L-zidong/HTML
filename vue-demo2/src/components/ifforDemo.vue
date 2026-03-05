<script>
export default {
    data() {
        return {
            isrun: "D",// A B C
            isShow: true,
            items: ['A', 'B', 'C', 'D', 'E'],
            userInfo: {
                name: "张三",
                age: 18,
                sex: "男"
            }

        }
    }
}
</script>

<template>
    <div>
        <h2>条件渲染</h2>
        <div v-if="isrun === 'A'">A</div>
        <div v-else-if="isrun === 'B'">B</div>
        <div v-else-if="isrun === 'C'">C</div>
        <div v-else> not ABC</div>
        <div v-show="isShow">show和if的区别是什么?</div>
        <!-- v-show和v-if的区别：
         v-if是条件渲染，是创建新的dom元素
         确保了在切换时 事件内的组件和监听器都会被销毁和重建
         是惰性的，在初次渲染条件值为false时，不会做任何事情
         只有当条件首次变为ture时才会被渲染，有更高的切换开销


         v-show是直接修改样式，v-show是基于CSS的显示隐藏
         v-show的元素会始终被渲染，并且只是简单的切换元素的display属性
         有更高初始渲染开销，如需频繁切换，使用v-show较好，如绑定条件很少改变，用v-if
          -->
        <h2>列表渲染</h2>
        <div v-for="(item, index) in items">{{ item }}-{{ index }}</div>
        <!--实际渲染的是数组内容item，而不是数组下标index-->
        <div v-for="(value, key, index) of userInfo"> {{ key }}-{{ value }}-{{ index }}</div>
        <!--遍历对象所有属性，key为属性名，value为属性值，index为索引-->

    </div>
</template>