import { ref, computed } from 'vue';
export const useCounter = (valor: number) => {
  const counter = ref(valor);
  return { counter, squareCounter: computed(() => counter.value * counter.value) };
};
