import { sleep } from '@/helpers/sleep';
import type { ChatInterface } from '@/interfaces/chat-interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatInterface[]>([]);

  const getHerResponse = async () => {
    const response = await fetch('https://yesno.wtf/api');
    const data = (await response.json()) as YesNoResponse;
    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;
    messages.value.push({
      id: messages.value.length + 1,
      message: text,
      itsMine: true,
    });
    if (!text.endsWith('?')) return;
    // await sleep(1.5)
    const { answer, image } = await getHerResponse();
    messages.value.push({
      id: messages.value.length + 1,
      message: answer,
      itsMine: false,
      image,
    });
  };
  return {
    //PROPIEDADES
    messages,
    //METODOS
    onMessage,
  };
};
