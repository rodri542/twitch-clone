<script setup lang="ts">
import texts from '@/assets/data/texts.json'
console.log(texts.Categories[1].icon)
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
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.6rem;

  @include responsive('md') {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
