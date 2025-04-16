// import store from 'src/store/index'
import { LocalStorage, Quasar } from 'quasar';

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${
        LocalStorage.getItem('auth') || ''
      }`;
      // config.headers.Authorization = store.state.token;
      // config.headers.Authorization = 'kl8wadkjpgh1sxvrrcthv9ylw3fmkfdxjmtxagfabaejbzlzrnhe4nqtuknmk6i3';
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error.response.data.status === 401) {
        window.location.href = '/login';
      } else {
        return Promise.reject(error);
      }
    },
  );
  return instance;
}
