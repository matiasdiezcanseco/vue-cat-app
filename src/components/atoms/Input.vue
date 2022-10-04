<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: { default: '', type: String },
    placeholder: { defaul: '', type: String },
  },
  methods: {
    updateValue(value: string) {
      this.$emit('change', value)
    },
  },
})
</script>

<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="updateValue(($event as any).target.value)"
  />
</template>

<style scoped lang="scss">
input {
  background-color: var(--background-color);
  border: 2px solid var(--color-yellow);
  padding: 0.6rem;
  border-radius: 0.4rem;
  color: var(--color-white);

  &::placeholder {
    color: var(--color-white);
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
}
</style>
