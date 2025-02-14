<script setup lang="ts"></script>
<template>
  <div class="layout">
    <AppHeader />
    <main class="main__index">
      <LeftSideBar />
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
