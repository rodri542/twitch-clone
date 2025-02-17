<template>
  <div class="layout">
    <AppHeader />
    <main class="main__index">
      <LeftSideBar class="sidebar" />
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@use '/assets/styles/main.scss' as *;

.sidebar {
  @include responsive('sm') {
    display: none;
  }
}
</style>
