<script setup lang="ts">
import texts from '@/assets/data/texts.json'
import { useCategoriesStore } from '~/stores/categories'
import { onMounted } from 'vue'

const categoriesStore = useCategoriesStore()

onMounted(() => {
  categoriesStore.fetchCategories()
})
</script>

<template>
  <section class="categories">
    <div v-if="categoriesStore.loading">{{ texts.HomePageTexts.chrg }}</div>
    <div v-if="categoriesStore.error">
      {{ categoriesStore.error }}
    </div>
    <ul v-if="!categoriesStore.loading" class="categories__list">
      <li
        v-for="category in categoriesStore.categories"
        :key="category.id"
        class="categories__item"
      >
        <img :src="category.box_art_url" :alt="category.name" class="categories__image" />
        <div class="categories__info">
          <p class="categories__name">{{ category.name }}</p>
          <p class="categories__viewers">{{ texts.HomePageTexts.views }}</p>
          <div class="categories__tags">
            <span class="categories__tag">{{ texts.HomePageTexts.catag }}</span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;
@use '@/assets/styles/main.scss' as *;

.categories {
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    padding: 0;
    list-style: none;

    @include responsive('lg') {
      flex-wrap: wrap;
      justify-content: start;
    }

    @include responsive('xs') {
      flex-direction: column;
      align-items: start;
    }
  }

  &__item {
    overflow: hidden;
    text-align: start;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    .categories__image {
      width: 11.31rem;
      height: 15.12rem;
      margin-bottom: 0.01rem;
      cursor: pointer;
    }

    .categories__info {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.25rem;

      .categories__name {
        font-size: 0.9rem;
        font-weight: bold;
      }

      .categories__viewers {
        font-size: 0.8rem;
        color: map.get($text-colors, 'secundary-text-color');
      }

      .categories__tags {
        margin-top: 0.25rem;
        display: flex;
        justify-content: center;
        gap: 0.25rem;

        .categories__tag {
          cursor: pointer;
          background: map.get($button-colors, 'secondary');
          padding: 0.25rem 0.5rem;
          border-radius: 25rem;
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>
