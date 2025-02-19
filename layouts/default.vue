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
  position: sticky;
  top: 5rem;
  height: calc(100vh - 5rem);
  overflow-y: hidden;
  z-index: 999;

  @include responsive('sm') {
    display: none;
  }
}
</style>
