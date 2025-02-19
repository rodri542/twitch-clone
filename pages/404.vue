<script lang="ts" setup>
definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="container">
    <div class="noise" />
    <div class="overlay" />
    <div class="terminal">
      <h1>Error <span class="errorcode">404</span></h1>
      <p class="output">
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <p class="output">
        Please try to <NuxtLink to="/">go back</NuxtLink> or
        <NuxtLink to="/">return to the homepage</NuxtLink>.
      </p>
      <p class="output">Good luck.</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  height: 100vh;
  background-color: #000000;
  background-image: radial-gradient(#11581e, #041607);
  font-family: 'Inconsolata', Helvetica, sans-serif;
  font-size: 1.5rem;
  color: rgba(128, 255, 128, 0.8);
  text-shadow:
    0 0 1ex rgba(51, 255, 51, 1),
    0 0 2px rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.noise {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: 0.02;
}

.overlay {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: auto 4px;
  z-index: 1;
}

.overlay::before {
  content: '';
  pointer-events: none;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    transparent 0%,
    rgba(32, 128, 32, 0.2) 2%,
    rgba(32, 128, 32, 0.8) 3%,
    rgba(32, 128, 32, 0.2) 3%,
    transparent 100%
  );
  background-repeat: no-repeat;
  animation: scan 7.5s linear infinite;
}

@keyframes scan {
  0% {
    background-position: 0 -100vh;
  }
  35%,
  100% {
    background-position: 0 100vh;
  }
}

.terminal {
  box-sizing: border-box;
  width: 90%;
  max-width: 1000px;
  padding: 4rem;
  text-transform: uppercase;
  z-index: 2;
}

.errorcode {
  color: #ff5252;
}

.output {
  color: rgba(128, 255, 128, 0.8);
  text-shadow:
    0 0 1px rgba(51, 255, 51, 0.4),
    0 0 2px rgba(255, 255, 255, 0.8);
}

a {
  color: rgba(128, 255, 255, 0.8);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
