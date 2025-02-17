<script script setup lang="ts"></script>

<template>
  <div class="HomePage">
    <ClientOnly>
      <HomepageComponentsStreamerBlock />
      <HomepageComponentsStreamerBlock />
    </ClientOnly>
    <HomepageComponentsCategoriesBlock />
    <ClientOnly>
      <HomepageComponentsStreamerBlock />
      <HomepageComponentsStreamerBlock />
    </ClientOnly>
  </div>
</template>

<style scoped>
.HomePage {
  width: 100%;
  gap: 2rem;
}
</style>
