import axios from 'axios';

const fetchAll = async ({ commit }) => {
  const users = await axios.get('users');
  commit('listUser', { users: users.data });
};

const create = async ({ commit }, user) => {
  const users = await axios.post('users', user);
  commit('novoUser', users.data);
};

const deleteUser = async ({ commit }, id) => {
  const user = await axios.delete(`users/${id}`);
  commit('removeUser', user.id);
};

export default {
  fetchAll,
  create,
  deleteUser,
};
