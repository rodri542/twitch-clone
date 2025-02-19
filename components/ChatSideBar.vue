<template>
  <section class="chat">
    <ChatComponentsChatHeader />
    <ChatComponentsChatGifts />
    <ChatComponentsChatInput />
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.chat {
  width: 100%;
  background-color: map.get($bg-colors, 'nav-background-color');
  display: flex;
  flex-direction: column;
}
</style>
