<script>
export default {
    data() {
        return {
            msg: "active",
            rawHtml: '<a href="#">This link</a>',
            dynamicId: 'appid',
            dynamicClass: "appclass",
            objectbject: {
                id: "appid",
                class: "appclass"
            },

        }
    },
    computed() {
        return {
        }
    },
    methods() {
        return {
        }
    },
    //计算属性和方法属性的区别:
    //computed只会在第一次渲染的时候被计算，之后它的值会被缓存，除非相关的依赖发生改变。
    //methods中的方法每次会返回一个函数，这个函数会返回一个对象，这个对象会作为组件的data属性。
} 
</script>

<template>
    <div><!-- 属性绑定 -->
        <p v-html="rawHtml"></p>
        <p>{{ msg }}</p> <!--模板语法 -->
        <p v-bind:class="dynamicClass" v-bind:id="dynamicId">测试1</p>
        <!-- v-bind将元素的attribute与组件的data中的属性绑定起来 如果返回
         null或者undefined，那么该属性将不被渲染。v-bind可以直接简写为冒号：
         : -->
        <p v-bind:="objectbject">测试2</p>
        <!--动态绑定多个属性-->
    </div>
</template>
<style>
.appclass {
    color: wheat;
    font-size: 20px;
    background-color: red;
    text-align: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: blue;
        color: white;
    }

    &:active {
        background-color: green;
        color: white;
    }
}
</style>