<template>
  <div class="form">
    <form class="form-action">
      <input type="text" name="name" placeholder="digite o nome" v-model="user.name" />
      <input type="text" name="mail" placeholder="digite o email" v-model="user.mail" />
      <input type="password" name="password" placeholder="digite a senha" v-model="user.passwd" />
    </form>
    <div class="button">
      <button class="submit" @click="onSubmit">Cadastrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      user: {
        name: '',
        mail: '',
        passwd: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.user);
      this.user = {
        name: '',
        mail: '',
        passwd: '',
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.form-action {
  display: flex;
  flex-direction: column;
}
.form-action input {
  margin: 4px;
  height: 28px;
  border-radius: 3px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  box-shadow: 1px 1px 2px;
  border: 1px rgb(52, 170, 111);
}
input:focus {
  border: 0 none;
  outline: 0;
}
.submit {
  background-color: rgb(139, 219, 86);
  border: none;
  border-radius: 4px;
  width: 50%;
  height: 25px;
  cursor: pointer;
  text-align: center;
  outline: none;
}
</style>
