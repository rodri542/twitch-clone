<template>
  <div class="layout">
    <AppHeader />
    <main class="main__index">
      <LeftSideBar class="sidebar" />
      <div class="content">
        <slot />
      </div>
      <ChatSideBar class="chat-sidebar" />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars' as *;
@use '/assets/styles/main.scss' as *;

.main__index {
  display: flex;
  width: 100%;
  padding: 0;
  padding-left: 1.25rem;
}

.sidebar {
  position: sticky;
  top: 5rem;
  height: calc(100vh - 5rem);
  width: 16rem;
  z-index: 999;

  @include responsive('sm') {
    display: none;
  }
}

.content {
  flex: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  scrollbar-width: none;
}

.chat-sidebar {
  position: sticky;
  max-width: 21.31rem;
  max-height: 91vh;
  z-index: 999;
  background-color: map-get($bg-colors, 'nav-background-color');
  overflow-y: hidden;

  @include responsive('lg') {
    display: none;
  }
}
</style>
