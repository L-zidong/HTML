<script setup>
import EventDemo from './components/eventDemo.vue';
import HelloWorld from './components/HelloWorld.vue';
import ifforDemo from './components/ifforDemo.vue';
import cssDemo from './components/cssDemo.vue';
import watchDemo from './components/watchDemo.vue';
import modleDemo from './components/modleDemo.vue';
</script>

<template>
  <HelloWorld />
  <ifforDemo />
  <EventDemo />
  <cssDemo />
  <watchDemo />
  <modleDemo />
</template>

<style scoped>
/* scoped:让样式只对当前组件有效，不会影响其他组件样式 */
</style>