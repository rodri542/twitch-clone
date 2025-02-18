<script setup lang="ts">
import texts from '@/assets/data/texts.json'
</script>

<template>
  <div class="chat-room">
    <div class="chat-room__container">
      <div class="chat-room__welcome">Welcome to the chat room!</div>

      <div class="chat-room__messages">
        <div
          v-for="message in texts.StreamPageTexts.chat"
          :key="message.id"
          class="chat-room__message"
        >
          <div class="chat-room__message-content">
            <img
              :src="message.isSubscriber ? texts.Icons.chatStar : texts.Icons.X"
              :alt="message.isSubscriber ? 'Subscriber' : 'Non-subscriber'"
              class="chat-room__status-icon"
            />
            <span
              class="chat-room__username"
              :class="{
                'chat-room__username--sub': message.isSubscriber,
                'chat-room__username--green': message.username === 'midgarcia1manue',
                'chat-room__username--blue': [
                  'rombo',
                  'pelu12',
                  'guerrin',
                  'urunik1',
                  'michu',
                  'liberos',
                ].includes(message.username),
              }"
            >
              {{ message.username }}
            </span>
            <span class="chat-room__separator">:</span>
            <span class="chat-room__text">{{ message.message }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.chat-room {
  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__welcome {
    color: #adadb8;
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
    border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.1);
  }

  &__messages {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
  }

  &__message {
    margin-bottom: 0.5rem;
    line-height: 1.4;
    word-break: break-word;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__message-content {
    display: flex;
    align-items: flex-start;
    gap: 0.375rem;
    flex-wrap: wrap;
  }

  &__status-icon {
    width: 1rem;
    height: 1rem;
    margin-top: 0.125rem;
  }

  &__username {
    font-weight: 500;
    color: #00b5ad;

    &--sub {
      color: #ffd700;
    }

    &--green {
      color: #2ecc71;
    }

    &--blue {
      color: #5c9fef;
    }
  }

  &__separator {
    color: #efeff1;
    margin-right: 0.25rem;
  }

  &__text {
    color: #efeff1;
  }
}
</style>
