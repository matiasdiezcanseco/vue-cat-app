<script lang="ts">
import { defineComponent } from 'vue'
import type { Breed } from '../../interfaces/Cats'

export default defineComponent({
  props: {
    breed: { default: {} as Breed },
    isEven: { default: false },
  },
  methods: {
    toggleFavourite() {
      this.$emit('toggleFavourite', this.breed.id)
    },
  },
})
</script>

<template>
  <div class="cat" :class="{ even: isEven }">
    <img :src="breed.image.url" width="300" :alt="breed.name" />
    <div class="cat__description">
      <h2>{{ breed.name }}</h2>
      <div class="cat__attribute">
        <h3>Life span:</h3>
        <p>{{ breed.life_span }}</p>
      </div>
      <div class="cat__attribute">
        <h3>Affection level:</h3>
        <p>{{ breed.affection_level }}</p>
      </div>
      <div class="cat__attribute">
        <h3>Child friendly:</h3>
        <p>{{ breed.child_friendly }}</p>
      </div>
    </div>
    <div class="cat__star" @click="toggleFavourite()">
      <font-awesome-icon
        :class="{ favourite: breed.is_favourite }"
        icon="fa-solid fa-star"
        size="2x"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cat {
  position: relative;
  border: 6px solid var(--color-black);
  border-radius: 2rem;
  width: fit-content;
  overflow: hidden;
  background-color: var(--color-orange);
  color: var(--color-green);
  padding-bottom: 0.5rem;
}
.even {
  background-color: var(--color-yellow);
}
.cat__description {
  text-align: center;
}
.cat__attribute {
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin-left: 1rem;
  }
}

.cat__star {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  z-index: 10;
  cursor: pointer;
}

.favourite {
  color: var(--color-yellow);
}
</style>
