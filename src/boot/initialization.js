import { boot } from 'quasar/wrappers';
import { LocalStorage, Dark } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // Dark Mode 설정
  console.log('### initialization ###');
  console.log('MODE: ', import.meta.env.MODE);
  console.log('BASE_URL: ', import.meta.env.BASE_URL);
  console.log('PROD: ', import.meta.env.PROD);
  console.log('DEV: ', import.meta.env.DEV);
  console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);

  const darkMode = LocalStorage.getItem('darkMode');
  Dark.set(darkMode);
});
