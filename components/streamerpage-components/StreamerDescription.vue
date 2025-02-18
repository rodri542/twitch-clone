<script setup lang="ts">
import texts from '@/assets/data/texts.json'
defineProps<{
  description: string
  viewers: number
}>()
</script>

<template>
  <div class="about-container">
    <div class="about-content">
      <p class="about-followers">
        <strong>{{ viewers }}</strong> {{ texts.StreamPageTexts.followers }}
      </p>
      <p class="about-description">
        {{ description }}
      </p>
    </div>

    <hr class="about-divider" />

    <div class="about-socials">
      <span class="social">
        <img :src="texts.Icons.YouTube" alt="YouTube" />
        {{ texts.StreamPageTexts.YouTube }}
      </span>
      <span class="social">
        <img :src="texts.Icons.YouTube" alt="Instagram" />
        {{ texts.StreamPageTexts.Instagram }}
      </span>
      <span class="social">
        <img :src="texts.Icons.YouTube" alt="Twitter" />
        {{ texts.StreamPageTexts.Twitter }}
      </span>
      <span class="social">
        <img :src="texts.Icons.YouTube" alt="TikTok" />
        {{ texts.StreamPageTexts.TikTok }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/vars.scss' as *;

.about-container {
  background-color: map-get($bg-colors, 'nav-background-color');
  padding: 1.5rem;
  margin: 0 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .about-followers {
    font-size: 1rem;
    font-weight: bold;
  }

  .about-description {
    font-size: 0.9rem;
    color: map-get($text-colors, 'secundary-text-color');
  }
}

.about-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0.5rem 0;
}

.about-socials {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  .social {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.9rem;
    color: white;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
}
</style>
