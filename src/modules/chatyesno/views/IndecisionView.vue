<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChartMeesages :messages="messages" />

    <MessagesBox @send-message="onMessage" />
  </div>
</template>

<script setup lang="ts">

import { useChat } from '@/modules/chatyesno/composables/useChat';
import ChartMeesages from '../components/chat/ChatMessages.vue'
import MessagesBox from '../components/chat/MessagesBox.vue'


const { messages, onMessage } = useChat();


</script>
