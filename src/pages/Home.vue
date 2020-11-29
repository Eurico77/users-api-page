<template>
  <div class="home">
    <h1>List users</h1>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState('Users', ['list']),
  },
  methods: {
    ...mapActions('Users', ['setList']),
  },
  mounted() {
    this.setList();
  },
};
</script>
