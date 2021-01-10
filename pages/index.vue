<template>
  <div class="container">
    <div>
      <Logo />
      <p>{{ msg }}</p>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { User } from '@/type/user'

export default Vue.extend({
  data() {
    return {
      msg: 'helloworld',
      user: {},
    }
  },
  mounted() {
    const users: User = {
      name: 'AAAA',
      age: 5050,
    }

    this.user = { ...users }

    console.log('users :', users)
  },
})
</script>

<style lang="scss" scoped>
@import './pages/style.scss';
</style>
