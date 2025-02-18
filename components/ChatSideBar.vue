<template>
  <section class="chat" />
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.chat {
  width: 100%;
  height: 100vh;
  background-color: map-get($bg-colors, 'nav-background-color');
  display: flex;
  flex-direction: column;
}
</style>
