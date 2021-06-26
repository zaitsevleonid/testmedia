<template>
  <div class="d-flex">
    <img class="mr-4" :src="avatar" alt="Аватарка" />
    <div>
      <div class="font-weight-bold">
        {{ name }}
      </div>
      <div>
        {{ email }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
img {
  border-radius: 50%;
  vertical-align: middle;
  border-style: none;
  height: 2.375rem;
  width: 2.375rem;
  margin-top: 0.1875rem;
  margin-bottom: 0.1875rem;
}
</style>
