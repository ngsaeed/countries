<template>
  <Header></Header>
<!--  <router-link to="/details">details</router-link>-->
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>
