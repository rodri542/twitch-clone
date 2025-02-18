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
@use '/assets/styles/main.scss' as *;

.main__index {
  display: flex;
  width: 100%;
  height: calc(100vh - 5rem);
  padding: 0 1.25rem;
}

.content {
  width: 100%;
}

.chat-sidebar {
  position: absolute; /* Saca el chat del flujo normal */
  top: 0;
  right: 0;
  width: 21.31rem;
  height: 100vh;
  z-index: 10;
}
</style>
