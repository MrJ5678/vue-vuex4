<template>
  <div>
    <h2>Home: {{ counter }}</h2>
    <h2>totalPrice: {{$store.getters.totalPrice}}</h2>
  </div>
</template>

<script>
import { useState } from "../hooks/useState"

export default {
  // computed: {
  //   // ...mapState(["counter"])
  //   ...mapState({
  //     sCounter: state => state.counter
  //   })
  // }
  setup() {
    // const sCounter = computed(() => store.state.counter)
    const storeState = useState(["counter"])

    return {
      ...storeState
    }
  },
}
</script>

<style scoped></style>
