import axios from 'axios';

const setList = () => {
  axios.get('users')
    .then((res) => console.log(res.data));
};

export default {
  setList,
};
