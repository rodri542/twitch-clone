<script setup lang="ts">
import texts from '@/assets/data/texts.json'
</script>
<template>
  <section>
    <HomepageComponentsHeatherText
      :principal-text="texts.HomePageTexts.Cat"
      :secondary-text="texts.HomePageTexts.WeThink"
    />
    <HomepageComponentsCategoriesBlockComponentsCategoriesCardsList />
    <HomepageComponentsCategoriesBlockComponentsCategoriesButtonsList />
  </section>
</template>
