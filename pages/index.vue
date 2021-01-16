<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" class="d-flex">
          <logo />
        </b-col>
        <b-col cols="12" class="mt-5">
          <h1>Votding</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/Logo.vue'
// import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo,
  },
  mounted() {
    this.$axios
      .$get('https://jsonplaceholder.typicode.com/todos/1')
      .then((res: any) => {
        console.warn('RES:', res)
      })
  },
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
