<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from './components/organisms/Navigation.vue'
export default defineComponent({
  name: 'App',
  components: { Navigation },
  data() {
    return {
      searchWord: '' as string,
    }
  },
})
</script>

<template>
  <header></header>
  <main>
    <Navigation />
    <router-view></router-view>
  </main>
</template>

<style scoped lang="scss"></style>
