import axios from 'axios';

const base = 'http://localhost:3333/api';

const fetchAll = async ({ commit }) => {
  const users = await axios.get('users');
  commit('SET_LIST', { users: users.data });
};

const create = async ({ commit }, user) => {
  const users = await axios.post(`${base}/users`, user);
  commit('novoUser', users.data);
};

const deleteUser = async ({ commit }, id) => {
  const user = await axios.delete(`users/${id}`);
  commit('removeTodo', user.id);
};

export default {
  fetchAll,
  create,
  deleteUser,
};
