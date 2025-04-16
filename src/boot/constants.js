import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  app.config.globalProperties.hello = 'Hello Quasar!!!';
  console.log('MODE: ', import.meta.env.MODE);
  console.log('BASE_URL: ', import.meta.env.BASE_URL);
  console.log('PROD: ', import.meta.env.PROD);
  console.log('DEV: ', import.meta.env.DEV);
  console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);
});
