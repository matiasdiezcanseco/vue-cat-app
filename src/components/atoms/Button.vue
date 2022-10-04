<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: { default: '', type: String },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
})
</script>

<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  background-color: var(--color-yellow);
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  color: var(--color-background);
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: var(--color-yellow-hover);
  }
}
</style>
