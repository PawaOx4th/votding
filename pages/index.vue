<template>
  <div class="container">
    <div>
      <Logo />
      {{ msg }}
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
