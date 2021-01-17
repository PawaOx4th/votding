<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" class="d-flex mt-5">
          <logo />
        </b-col>
        <b-col cols="12" class="mt-5 title">
          <h1>Votding</h1>
        </b-col>
        <b-col cols="12" class="mt-5">
          <p class="text-center">TEAM MEMBERS</p>
        </b-col>
        <b-col v-for="member in members" :key="member.id" cols="3">
          <b-card
            :title="member.name"
            :img-src="member.avatar_url"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/Logo.vue'
// import { fetchProfile } from '@/util/service.ts'
// import Logo from '~/components/Logo.vue'

// interface githubFormat:object

export default Vue.extend({
  components: {
    Logo,
  },
  async asyncData({ redirect, $axios }) {
    try {
      const api_Github = 'https://api.github.com'
      const responses: any[] = []
      const usersName: string[] = [
        'pawaox4th',
        'Harin3Bone',
        'Kridsada-Wannasing',
      ]

      for (let i = 0; i < usersName.length; i++) {
        const response = await $axios.$get(
          `${api_Github}/users/${usersName[i]}`,
          {
            headers: {
              Authorization: process.env.GITHUB_TOKEN,
            },
          }
        )
        responses.push(response)
      }

      const members = [...responses]
      return {
        members,
      }
    } catch (error) {
      redirect('/404')
    }
  },
  data() {
    return {
      members: [],
    }
  },
  mounted() {},
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
