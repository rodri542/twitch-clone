<script setup lang="ts">
import texts from '@/assets/data/texts.json'
</script>

<template>
  <div class="categories-container">
    <HomepageComponentsCategoriesBlockComponentsCategoryButton
      v-for="category in texts.Categories"
      :key="category.id"
      :text="category.name"
      :icon="category.icon"
      :icon-name="category.name"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/main.scss' as *;

.categories-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 0.6rem;

  @include responsive('lg') {
    grid-template-columns: repeat(3, 1fr);
  }

  @include responsive('sm') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include responsive('xs') {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
