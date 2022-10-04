<template>
  <div class="navbar">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navigation',
  computed: {
    route() {
      return this.$route.path
    },
  },
})
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: flex-end;

  * + * {
    margin-left: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--color-white);
  }
}
.router-link-active {
  transition: background-color 0.5s;
  background-color: var(--color-yellow);
}
</style>
