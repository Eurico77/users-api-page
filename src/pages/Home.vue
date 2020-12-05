<template>
  <div class="home">
    <h1>Cadastre um novo usuario</h1>
    <Form @submit="criar"> </Form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import Form from '../components/Form.vue';

export default {
  name: 'Home',
  components: {
    Form,
  },

  computed: {
    ...mapState('Users', ['users']),
    ...mapGetters('Users', ['usuariosFiltrados', 'tamanho']),
  },
  methods: {
    ...mapActions('Users', ['fetchAll', 'create']),
    async criar(user) {
      await this.create(user);
      this.fetchAll();
    },
  },

  mounted() {
    this.fetchAll();
  },
};
</script>
<style>
li {
  list-style: none;
}
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.list {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.content {
  display: flex;
  justify-content: space-between;
}
</style>
