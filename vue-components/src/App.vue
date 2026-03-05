<template>
<Header/>
<Main/>
<Aside/>
</template>
<script>
import Header from './pages/Header.vue'
import Main from './pages/Main.vue';
import Aside from './pages/Aside.vue';
export default {
  components: {
    Main,
    Header,
    Aside
  }
}
</script>
<style>
</style>