<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th></th>
        <th>Basic Info</th>
        <th>Employee Code</th>
        <th>Designation</th>
        <th>Phone Number</th>
        <th>Joining Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td class="font-weight-bold table-text-color">
          <div class="mx-2 d-flex justify-content-center">{{ item.id }}</div>
        </td>
        <td>
          <UserInfo
            :avatar="item.avatar"
            :name="item.name"
            :email="item.email"
          />
        </td>
        <td class="font-weight-bold">{{ item.employeeCode }}</td>
        <td class="font-weight-bold">{{ item.designation }}</td>
        <td class="font-weight-bold">{{ item.phone }}</td>
        <td class="font-weight-bold">{{ item.joiningDate }}</td>
        <td class="table-text-color">
          <i class="fas fa-ellipsis-v ml-5"></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { User } from '~/util/types'
export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true,
    } as PropOptions<User[]>,
  },
})
</script>

<style>
.table {
  border-collapse: separate;
  border-spacing: 0 1rem;
}
.table thead th {
  color: #cbd0d9;
  border: inherit;
}
.table tbody td:first-child {
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
}
.table tbody td:last-child {
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.table tbody tr {
  border-radius: 0.5rem;
}
.table tbody tr:hover {
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}
.table tbody td {
  vertical-align: middle;
  background-color: white;
  border: inherit;
}
.table-text-color {
  color: #cbd0d9;
}
</style>
