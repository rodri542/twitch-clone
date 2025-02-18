<script setup lang="ts">
import texts from '@/assets/data/texts.json'

defineProps<{
  username: string
  title: string
  category: string
  avatar: string
  tags: string[]
  viewers: number
  time: string
}>()

const formatViewers = (viewers: number): string => {
  return viewers.toLocaleString('en-US')
}
</script>

<template>
  <div class="streamer-info">
    <div class="streamer-info__header">
      <div class="streamer-info__avatar">
        <img :src="avatar" :alt="`${username} avatar`" class="streamer-info__avatar_img" />
        <span class="streamer-info__avatar_span">{{ texts.StreamPageTexts.Live }}</span>
      </div>

      <div class="streamer-info__details">
        <div class="streamer-info__top">
          <h2 class="streamer-info__username">{{ username }}</h2>
          <div class="streamer-info__actions">
            <MainButtons color="primary">
              <img :src="texts.Icons.love" alt="Viewers" class="streamer-info__actions-icon-love" />
              {{ texts.ButtonTexts.Follow }}
            </MainButtons>
            <MainButtons color="secondary">
              <img :src="texts.Icons.star" alt="Viewers" class="streamer-info__actions-icon-star" />
              <p>{{ texts.ButtonTexts.Subscribe }}</p>
              <img :src="texts.Icons.Down" alt="Viewers" class="streamer-info__actions-icon-down" />
            </MainButtons>
          </div>
        </div>

        <div class="streamer-info__middle">
          <div class="streamer-info__info">
            <p class="streamer-info__title">{{ title }}</p>
            <a href="#" class="streamer-info__cat">{{ category }}</a>
          </div>

          <div class="streamer-info__stats">
            <div class="streamer-info__stats-viewers">
              <img :src="texts.Icons.Profile" alt="Viewers" class="streamer-info__stats-icon" />
              <span class="streamer-info__stats-number">{{ formatViewers(viewers) }}</span>
            </div>
            <span class="streamer-info__stats-time">{{ time }}</span>
            <img :src="texts.Icons.share" alt="Viewers" class="streamer-info__stats-icon-n" />
            <img :src="texts.Icons.More" alt="Viewers" class="streamer-info__stats-icon-m" />
          </div>
        </div>
      </div>
    </div>

    <div class="streamer-info__tags">
      <span v-for="tag in tags" :key="tag" class="streamer-info__tag">{{ tag }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars' as *;

.streamer-info {
  padding: 1rem;
  width: 100%;
  //   max-width: 51.62rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &__header {
    display: flex;
    align-items: center;
    width: 100%;

    gap: 1rem;
  }

  &__avatar {
    position: relative;

    &_img {
      min-width: 4rem;
      height: 4rem;
      border-radius: 50%;
      object-fit: cover;
    }

    &_span {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background: red;
      font-size: 0.75rem;
      font-weight: bold;
      padding: 0.07rem 0.5rem;
      border-radius: 0.4rem;
      white-space: nowrap;
    }
  }

  &__details {
    width: 100%;

    .streamer-info__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding-bottom: 0.5em;

      .streamer-info__username {
        font-size: 1.25rem;
        font-weight: bold;
      }

      .streamer-info__actions {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 0.5rem;

        &-icon-love {
          padding-right: 0.5em;
        }
        &-icon-star {
          width: 1.5rem;
          padding-right: 0.6em;
          padding-bottom: 0.05rem;
        }
        &-icon-down {
          width: 1.5rem;
          padding-left: 0.5em;
          filter: invert(1);
          padding-bottom: 0.05rem;
        }
      }
    }

    .streamer-info__middle {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .streamer-info__title {
        color: map-get($text-colors, 'secundary-text-color');
      }

      .streamer-info__cat {
        color: map-get($text-colors, 'especial-text-color');
        text-decoration: none;
      }
    }
    .streamer-info__stats {
      display: flex;
      align-items: center;
      gap: 1rem;

      &-viewers {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-weight: bold;
        color: #ff7070;
        padding-left: 1rem;
      }

      &-time {
        padding-left: 1rem;
        color: map-get($text-colors, 'secundary-text-color');
      }

      &-icon {
        width: 1.25rem;
        height: 1.25rem;
        display: inline-block;
        filter: brightness(0) saturate(100%) invert(35%) sepia(95%) saturate(1000%)
          hue-rotate(-10deg);
        &-m {
          filter: invert(1);
        }
      }
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .streamer-info__tag {
      background: map-get($button-colors, 'secondary');
      padding: 0.3rem 0.6rem;
      border-radius: 0.5rem;
      font-size: 0.75rem;
    }
  }
}
</style>
