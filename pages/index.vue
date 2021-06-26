<template>
  <div class="container">
    <portal to="dashboard">
      <div>
        <b-button class="btn-dashboard">
          <i class="fas fa-plus"></i>
          Add Employee
        </b-button>
      </div>
    </portal>
    <div class="tabs-wrapper">
      <nav class="tabs font-weight-bold">
        <div
          v-for="tab in tabs"
          :key="tab"
          class="tab"
          :class="{ 'is-active': tab === selectedTab }"
          @click="selectedTab = tab"
        >
          {{ tab }}
        </div>
      </nav>
    </div>
    <UserTable class="my-3" :items="items" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'
import { User } from '~/util/types'

export default Vue.extend({
  async asyncData({ $axios }): Promise<object> {
    const users: User[] = await $axios.$get('/users')
    return {
      users,
    }
  },

  data() {
    return {
      selectedTab: '',
      users: [], // Из-за кривой типизации в asyncData
    }
  },

  computed: {
    tabs() {
      return ['Employee list', 'Management', 'Others']
    },
    items(): User[] {
      return this.users.map((user: User) => {
        return Object.assign({}, user, {
          joiningDate: moment(user.joiningDate).format('ll'),
        })
      })
    },
  },

  created() {
    this.selectedTab = this.tabs[0]
  },
})
</script>

<style scoped>
.btn-dashboard {
  background-color: #00dc81;
  border-color: #00dc81;
}

.tab:not([class*='is-active']) {
  color: #cbd0d9;
}
</style>
