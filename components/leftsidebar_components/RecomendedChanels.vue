<script setup lang="ts">
defineProps<{
  username: string
  game: string
  viewers: string
  avatar?: string
}>()
</script>

<template>
  <div class="recommended-channels__item">
    <div class="recommended-channels__user">
      <div class="recommended-channels__avatar">
        <div v-if="!avatar" class="recommended-channels__avatar-spinner" />
        <img
          v-if="avatar"
          class="recommended-channels__avatar-img"
          :src="avatar"
          :alt="`${username} avatar`"
        />
      </div>

      <div class="recommended-channels__info">
        <span class="recommended-channels__username">{{ username }}</span>
        <span class="recommended-channels__game">{{ game }}</span>
      </div>
    </div>

    <div class="recommended-channels__status">
      <span class="recommended-channels__live-dot" />
      <span class="recommended-channels__viewers">{{ viewers }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.recommended-channels__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3125;
  padding-bottom: 0.625rem;
}

.recommended-channels__user {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.recommended-channels__avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.recommended-channels__avatar-img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
}

.recommended-channels__avatar-spinner {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid map.get($button-colors, 'secondary');
  border-top-color: map.get($button-colors, 'primary');
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.recommended-channels__info {
  display: flex;
  flex-direction: column;
}

.recommended-channels__username {
  font-weight: bold;
  font-size: 0.875rem;
}

.recommended-channels__game {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.recommended-channels__status {
  display: flex;
  align-items: center;
  gap: 0.3125rem;
}

.recommended-channels__live-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: red;
  border-radius: 50%;
}

.recommended-channels__viewers {
  font-size: 0.875rem;
}
</style>
