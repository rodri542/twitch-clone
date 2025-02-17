<script setup lang="ts">
import texts from '@/assets/data/texts.json'
import { useStreamsStore } from '~/stores/streams'
import { computed } from 'vue'

defineProps<{ chunkIndex: number }>()

const streamsStore = useStreamsStore()

await streamsStore.fetchStreams()

const chunkedStreams = computed(() => streamsStore.chunkedStreams)
</script>

<template>
  <section v-if="chunkedStreams[chunkIndex]">
    <HomepageComponentsHeatherText
      :principal-text="texts.HomePageTexts.LiveChan"
      :secondary-text="texts.HomePageTexts.WeThink"
    />
    <div v-if="streamsStore.loadingChunked" class="loading-container">
      <div class="spinner" />
    </div>
    <ClientOnly>
      <HomepageComponentsStreamerBlockComponentsStreamerBlockList
        :chunk="chunkedStreams[chunkIndex]"
      />
    </ClientOnly>
    <HomepageComponentsStreamerBlockComponentsShowMore />
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;
@use '@/assets/styles/main.scss' as *;

.loading-container {
  display: flex;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.spinner {
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid map.get($button-colors, 'secondary');
  border-top-color: map.get($button-colors, 'primary');
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
