<template>
  <!-- Messages go here -->
  <!-- Example Message -->
  <div v-if="itsMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
  </div>

  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string
  itsMine: boolean
  image?: string
}
defineProps<Props>()
</script>
