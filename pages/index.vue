<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" class="d-flex">
          <logo />
        </b-col>
        <b-col cols="12" class="mt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, non? Tenetur dolorem nemo ratione, ipsum labore,
            facilis maxime veritatis possimus dolor excepturi ad? Dolorem, ad
            assumenda labore magnam nihil, quaerat nesciunt praesentium,
            consequatur similique inventore adipisci ipsam ut quibusdam
            voluptatum consequuntur iure neque accusantium voluptates quasi
            porro recusandae iste? Recusandae?
          </p>
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

<style scoped></style>
