<script lang="ts">
import Input from '../atoms/Input.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchBar',
  components: { Input },
  props: {
    searchWord: { default: '', type: String },
  },
  computed: {
    getButtonName() {
      return this.$route.path === '/' ? 'About Us' : 'Breed List'
    },
  },
})
</script>

<template>
  <div class="search">
    <div>
      <label for="searchWord" id="searchWord" name="Search">Search:</label>
      <Input :value="searchWord" @change="$emit('changeSearch', $event)" placeholder="Breed..." />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search {
  display: flex;
  justify-content: space-between;

  label {
    margin-right: 1rem;
  }
}

form {
  display: flex;
}
</style>
