<template>
  <div class="search-bar">
    <input type="text" placeholder="Search" class="search-bar__input" />
    <button class="search-bar__button">
      <svg
        class="search-bar__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.search-bar {
  display: flex;
  align-items: center;
  width: 22.25rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: map.get($bg-colors, 'nav-background-color');

  &__input {
    flex: 1;
    height: 100%;
    padding: 0 0.75rem;
    font-size: 1rem;
    background-color: map.get($bg-colors, 'nav-background-color');
    color: white;
    border: none;
    outline: none;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border: 0.0625rem solid map.get($bg-colors, 'borders-color');

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  &__button {
    width: 2.125rem;
    height: 100%;
    background-color: #2a2a2d;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background-color: #3a3a3d;
    }
  }

  &__icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
