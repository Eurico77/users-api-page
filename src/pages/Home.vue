<template>
  <div class="home">
    <h1>Crud users</h1>

    <table style="width:100%" v-for="user in users" :key="user.id">
      <tr>
        <th>NOME</th>
        <th>EMAIL</th>
      </tr>
      <tr>
        <td>{{ user.name }}</td>
        <td>{{ user.mail }}</td>
      </tr>
      <tr></tr>
    </table>

    <form class="formulario" @submit.prevent="criar">
      <input type="text" name="name" placeholder="digite o nome" v-model="user.name" />
      <input type="text" name="mail" placeholder="digite o email" v-model="user.mail" />
      <input type="password" name="password" placeholder="digite a senha" v-model="user.passwd" />
      <button>Cadastrar</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      user: {
        name: '',
        mail: '',
        passwd: '',
      },
    };
  },
  computed: {
    ...mapState('Users', ['users']),
    ...mapGetters('Users', ['usuariosFiltrados', 'tamanho']),
  },
  methods: {
    ...mapActions('Users', ['fetchAll', 'create']),
    async criar() {
      await this.create(this.user);
    },
  },
  mounted() {
    this.fetchAll();
  },
};
</script>
<style>
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.info h2 {
  padding: 10px;
}
</style>
