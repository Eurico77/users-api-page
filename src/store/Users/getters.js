const usuariosFiltrados = (state) => state.users.map((user) => user.name);

const tamanho = (state, getters) => getters.usuariosFiltrados.length;

export default {
  usuariosFiltrados,
  tamanho,
};
