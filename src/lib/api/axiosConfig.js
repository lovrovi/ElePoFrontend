import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8081',
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403) localStorage.removeItem('token');

    return Promise.reject(error);
  }
);

export default instance;
