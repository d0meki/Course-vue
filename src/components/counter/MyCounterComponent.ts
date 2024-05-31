import { defineComponent, computed, ref } from 'vue'
import { useCounter } from '../composables/userCounter'
export default defineComponent({
    // import { userCounter } from "../composables/userCounter";
    // const { counter, squareCounter } = userCounter();
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const { counter, squareCounter } = useCounter(props.value)
        // const counter = ref(props.value)
        // const squereCounter = computed(() => counter.value * counter.value)
        return { counter, squareCounter }
    }
})