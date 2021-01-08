<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ref } from '@nuxtjs/composition-api'

export default Vue.extend({
  setup() {
    const msg = ref('Hello')

    return {
      msg,
    }
  },
})
</script>

<style scoped></style>
