<script setup lang="ts">
import texts from '@/assets/data/texts.json'
defineProps<{ thumbnail: string }>()
</script>
<template>
  <div class="video-container">
    <div class="video-thumbnail">
      <img :src="thumbnail" alt="Stream Thumbnail" class="video-thumbnail--video" />

      <div class="video-controls">
        <div class="video-controls__left">
          <img :src="texts.Images.volume" alt="Volume" class="control-icon" />
          <img :src="texts.Images.play" alt="Play" class="control-icon" />
        </div>

        <div class="video-controls__right">
          <img :src="texts.Images.max" alt="Maximize" class="control-icon" />
          <img :src="texts.Images.conf" alt="Settings" class="control-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
}

.video-thumbnail {
  position: relative;
  width: 100%;
  // height: 29.62rem;
  // max-width: 51.62rem;

  &--video {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.video-controls {
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.video-controls__left {
  display: flex;
  gap: 0.5rem;
}

.video-controls__right {
  display: flex;
  gap: 0.5rem;
}

.control-icon {
  width: 1.87rem;
  height: 1.87rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
