import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c03d0.firebaseio.com/'
});

export default instance;