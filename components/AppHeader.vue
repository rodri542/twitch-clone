<template>
  <header class="header">
    <nav class="nav">
      <NavComponentsLeftSideContainer />
      <NavComponentsSearchBar />
      <NavComponentsRightSideButtons />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '/assets/styles/main.scss' as *;

.header {
  position: sticky;
  top: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @include responsive('md') {
    padding: 0 1rem;
  }

  @include responsive('sm') {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: auto;
  }
}
</style>
