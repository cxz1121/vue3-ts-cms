<template>
  <h2>{{ $store.state.name }}</h2>
  <el-button>shit</el-button>
  <router-link to="/login">login</router-link>
  <router-link to="/main">main</router-link>
  <router-view></router-view>
  <el-input></el-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: unset;
}
</style>
