<script script lang="ts">
import type { Breed } from '../../interfaces/Cats'
import BreedCard from '../molecules/BreedCard.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BreedList',
  components: {
    BreedCard,
  },
  data() {
    return {
      breeds: [] as Breed[],
    }
  },
  props: {
    searchWord: { default: '', type: String },
    showFavourites: { default: false, type: Boolean },
  },
  computed: {
    getBreedsQuantity() {
      return this.breeds.length
    },
    getFavouritesQuantity() {
      return this.breeds.filter((breed) => breed.is_favourite).length
    },
    getFilteredBreeds() {
      return this.breeds.filter((breed) =>
        breed.name.toLowerCase().includes(this.searchWord.toLowerCase()),
      )
    },
  },
  methods: {
    async toggleFavourite(id: string) {
      const index = this.breeds.findIndex((breed) => breed.id === id)
      const breed = this.breeds.find((breed) => breed.id === id)
      if (!breed) return
      await fetch(`http://localhost:5000/breeds/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          is_favourite: !breed.is_favourite,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      let auxBreeds = this.breeds
      auxBreeds[index] = { ...breed, is_favourite: !breed.is_favourite }
      this.breeds = []
      this.$nextTick(() => (this.breeds = auxBreeds))
    },
  },
  async created() {
    const res = await fetch('http://localhost:5000/breeds')
    this.breeds = (await res.json()) as Breed[]
  },
})
</script>

<template>
  <div class="title">
    <h2>Breed List</h2>
    <h5>There are {{ getBreedsQuantity }} breeds</h5>
    <h5>There are {{ getFavouritesQuantity }} favourite breeds</h5>
  </div>
  <div class="list">
    <BreedCard
      v-for="(breed, index) in getFilteredBreeds"
      :key="breed.id"
      :breed="breed"
      :is-even="!(index % 2)"
      @toggle-favourite="toggleFavourite"
    />
  </div>
</template>

<style scoped lang="scss">
.title {
  border-bottom: 1px solid var(--color-yellow);
  margin: 2rem 0;
  padding-bottom: 0.5rem;
}

.list {
  display: grid;
  justify-content: center;
  gap: 10px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
