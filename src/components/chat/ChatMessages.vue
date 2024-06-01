<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble v-for="msg in messages" :key="msg.id" v-bind="msg" />
      <!-- :its-mine="msg.itsMine" 
        :message="msg.message"
        :image="msg.image" -->
      <!-- <ChatBubble :its-mine="false" :message="'No!!'" image="https://yesno.wtf/assets/no/26-34b31d1f0777f70c61488f67a36576a9.gif" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatInterface } from '@/interfaces/chat-interface';
import { ref, watch } from 'vue';
import ChatBubble from './ChatBubble.vue'
interface Props {
  messages: ChatInterface[]
}

const {messages} = defineProps<Props>();

const chatRef = ref<HTMLDivElement|null>(null);

watch( messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value?.scrollHeight,
      behavior: 'smooth'
    })
  }, 100)
})

</script>
