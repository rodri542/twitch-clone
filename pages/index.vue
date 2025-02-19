<template>
  <div class="HomePage">
    <HomepageComponentsStreamerBlock :chunk-index="0" />
    <HomepageComponentsStreamerBlock :chunk-index="1" />

    <HomepageComponentsCategoriesBlock />

    <HomepageComponentsStreamerBlock :chunk-index="2" />
    <HomepageComponentsStreamerBlock :chunk-index="3" />
  </div>
</template>

<style scoped>
.HomePage {
  width: 100%;
  gap: 2rem;
}
</style>
