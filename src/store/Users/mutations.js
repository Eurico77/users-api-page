const SET_LIST = (state, { users }) => {
  state.users = users;
};

const novoUser = (state, user) => {
  state.users.push(user);
};

export default {
  SET_LIST,
  novoUser,
};
