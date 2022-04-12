<script setup>
import HelloWorld from './components/HelloWorld.vue'

const worker = new Worker(new URL('./worker', import.meta.url), {
  type: 'module'
})

const test = () => {
  worker.postMessage('modules')
}
</script>

<template>
  <img @click="test" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
