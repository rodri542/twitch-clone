<script setup lang="ts">
import { useCategoriesStore } from '~/stores/categories'
import { onMounted } from 'vue'

const categoriesStore = useCategoriesStore()

onMounted(() => {
  categoriesStore.fetchCategories()
})
</script>

<template>
  <section class="categories">
    <div v-if="categoriesStore.loading" class="categories__message categories__message--loading">
      Cargando...
    </div>
    <div v-if="categoriesStore.error" class="categories__message categories__message--error">
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
          <p class="categories__viewers">23K viewers</p>
          <div class="categories__tags">
            <span class="categories__tag">Gaming</span>
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

  &__message {
    text-align: center;
    font-size: 1.2rem;
    &--loading {
      color: #ffaa00;
    }
    &--error {
      color: #ff4d4d;
    }
  }

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    padding: 0;
    list-style: none;
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
      gap: 4px;

      .categories__name {
        font-size: 0.9rem;
        font-weight: bold;
        color: white;
      }

      .categories__viewers {
        font-size: 0.8rem;
        color: #b0b0b0;
      }

      .categories__tags {
        margin-top: 5px;
        display: flex;
        justify-content: center;
        gap: 5px;

        .categories__tag {
          cursor: pointer;
          background: #333;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.7rem;
          color: #fff;
        }
      }
    }
  }
}
</style>
