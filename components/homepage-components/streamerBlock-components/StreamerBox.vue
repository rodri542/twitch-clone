<script setup lang="ts">
import texts from '@/assets/data/texts.json'
const props = defineProps<{
  thumbnail: string
  title: string
  username: string
  game: string
  tags: string[]
  avatar: string
}>()

const router = useRouter()

const goToStreamerPage = () => {
  router.push(`/stream/${props.username}`)
}
</script>

<template>
  <div class="stream-card" @click="goToStreamerPage">
    <div class="stream-card__thumbnail">
      <img :src="thumbnail" :alt="title" />
    </div>
    <div class="stream-card__info">
      <div class="stream-card__avatar">
        <div v-if="!avatar" class="stream-card__avatar-spinner" />
        <img v-else :src="avatar" alt="Avatar {{avatar}}" />
      </div>
      <div class="stream-card__details">
        <h3 class="stream-card__title">{{ title }}</h3>
        <p class="stream-card__username">
          {{ username }} <img :src="texts.Icons.verified" :alt="texts.Icons.verified" />
        </p>
        <p class="stream-card__game">{{ game }}</p>
        <div class="stream-card__tags">
          <span v-for="tag in tags" :key="tag" class="stream-card__tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;
@use '@/assets/styles/main.scss' as *;

.stream-card {
  width: 28rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  &__thumbnail img {
    width: 100%;
    object-fit: cover;
  }

  &__info {
    display: flex;
    gap: 0.625rem;
  }

  &__avatar img {
    min-width: 3rem;
    max-width: 3rem;
    border-radius: 50%;
    object-fit: cover;
  }

  &__avatar-spinner {
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid map.get($button-colors, 'secondary');
    border-top-color: map.get($button-colors, 'primary');
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  &__details {
    display: flex;
    flex-direction: column;
    padding-top: 0.2rem;
  }

  &__title {
    font-size: 0.875rem;
    font-weight: bold;
    color: map.get($text-colors, 'main-text-color');
  }

  &__username {
    font-size: 0.75rem;
    color: map.get($text-colors, 'secundary-text-color');
  }

  &__game {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
  }

  &__tags {
    display: flex;
    gap: 0.3125rem;
    margin-top: 0.3125rem;
  }

  &__tag {
    background-color: map.get($button-colors, 'secondary');
    color: white;
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  @include responsive('lg') {
    width: 22rem;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
