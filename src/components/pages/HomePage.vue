<script lang="ts">
import SearchBar from '../molecules/SearchBar.vue'
import BreedList from '../organisms/BreedList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  components: { SearchBar, BreedList },
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
    <SearchBar :searchWord="searchWord" @change-search="searchWord = $event" />
    <Suspense>
      <BreedList :searchWord="searchWord" />
      <template #fallback>
        <h4>Loading...</h4>
      </template>
    </Suspense>
  </main>
</template>

<style scoped lang="scss"></style>
