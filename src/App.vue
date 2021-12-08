<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue-demi'
import { ReqGetDogs } from './api'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
onMounted(() => {
  GetDogs()
})
const GetDogs = async () => {
  const res = await ReqGetDogs()
  console.log(res) // {message: 'https://images.dog.ceo/breeds/malinois/n02105162_909.jpg', status: 'success'}
}
</script>

