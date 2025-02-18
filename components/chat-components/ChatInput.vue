<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useUsersStore } from '~/stores/users'
import texts from '@/assets/data/texts.json'

const route = useRoute()
const username = route.params.username as string

const streamsStore = useStreamsStore()
const usersStore = useUsersStore()

const userStream = computed(() =>
  streamsStore.getStreams.find(
    (stream) => stream.user_name.toLowerCase() === username.toLowerCase(),
  ),
)

const userInfo = computed(() => usersStore.getUsers[userStream.value?.user_id || ''])
</script>

<template>
  <div class="chat-input">
    <div class="chat-input__slow-mode">
      <div class="chat-input__slow-mode-container">
        <img :src="texts.Icons.info" alt="Info" class="chat-input__slow-mode-container-icon" />
        <span class="chat-input__slow-mode-container-span">Slow Mode</span>
      </div>

      <div class="chat-input__container">
        <input
          type="text"
          :placeholder="texts.StreamPageTexts.sendMessage"
          class="chat-input__field"
          :aria-label="texts.StreamPageTexts.sendMessage"
          :autofocus="true"
        />
        <img :src="texts.Icons.smilingFaces" alt="Send" class="chat-input__send-icon" />
      </div>
    </div>

    <div class="chat-input__footer">
      <div class="chat-input__stats">
        <div class="chat-input__stat">
          <img :src="texts.Icons.bits" alt="Bits" class="chat-input__icon" />
          <span>0</span>
        </div>
        <ClientOnly>
          <div class="chat-input__profile">
            <img :src="userInfo?.profile_image_url" alt="User Avatar" class="chat-input__avatar" />
            <span>0</span>
          </div>
        </ClientOnly>
      </div>

      <div class="chat-input__actions">
        <button class="chat-input__settings">
          <img :src="texts.Images.conf" alt="Settings" class="chat-input__icon" />
        </button>
        <MainButtons :color="'primary'">Chat</MainButtons>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.chat-input {
  width: 100%;
  background: map-get($bg-colors, 'nav-background-color');
  padding: 1rem;
  display: flex;
  flex-direction: column;

  &__slow-mode {
    align-items: center;
    color: map-get($text-colors, 'secundary-text-color');
    font-size: 0.875rem;
    background: rgba(42, 42, 46, 0.95);
    padding-top: 0.5rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid map-get($bg-colors, 'borders-color');

    &-container {
      padding-left: 0.5rem;
      padding-bottom: 0.75rem;
      display: flex;
      align-items: center;

      &-icon {
        width: 1.25rem;
        height: 1.25rem;
        opacity: 0.7;
      }

      &-span {
        padding-left: 0.5rem;
        position: relative;
        top: -1px;
      }
    }
  }

  &__icon {
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.7;
  }

  &__container {
    position: relative;
    background: rgba(31, 31, 35, 0.95);
    border: 0.0625rem solid map-get($bg-colors, 'borders-color');
    border-radius: 0.5rem;
    padding-top: 0.25rem;
    margin: 0;
  }

  &__field {
    width: 100%;
    background: transparent;
    border: none;
    color: white;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    &:focus {
      outline: none;
    }
  }

  &__send-icon {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.7;
    cursor: pointer;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.25rem;
  }

  &__stats {
    display: flex;
    gap: 1.25rem;
    align-items: center;
  }

  &__stat {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.875rem;
  }

  &__profile {
    display: flex;
    align-items: center;
    gap: 0.375rem;

    .chat-input__avatar {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__settings {
    background: transparent;
    border: none;
    padding: 0.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 2rem;
      height: 2rem;
      opacity: 0.7;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
