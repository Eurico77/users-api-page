const listUser = (state, { users }) => {
  state.users = users;
};

const novoUser = (state, user) => {
  state.users.push(user);
};

export default {
  listUser,
  novoUser,
};
