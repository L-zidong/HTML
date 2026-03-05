<template>
  <p :class="{ 'active': isActive }">Class对象样式绑定</p>
  <p :class="[arrActive, arrHasError]">Class数组样式绑定</p>
  <p :class="[isActive ? 'active' : '', { 'has-error': isActive }]">数组中嵌套对象</p>
  <p :style="{ color: 'green', fontSize: '30px' }">Style样式绑定</p>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      arrActive: 'active',
      arrHasError: 'has-error'
    }
  },
}

</script>
<style scoped>
.active {
  font-size: 30px
}

.has-error {
  color: red;
}
</style>