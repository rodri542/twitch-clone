<script setup lang="ts">
const { data, pending, error } = useFetch('/api/streams')

watchEffect(() => {})
</script>
<template>
  <div>
    <h2>Twitch Streams</h2>

    <!-- 🔄 Loading state -->
    <p v-if="pending">Cargando streams...</p>

    <!-- ❌ Error state -->
    <p v-else-if="error">Error: {{ error.message }}</p>

    <!-- ✅ Data state -->
    <ul v-else>
      <li v-for="stream in data" :key="stream.id">
        {{ stream.user_name }} - {{ stream.viewer_count }} viewers
      </li>
    </ul>
  </div>
</template>
