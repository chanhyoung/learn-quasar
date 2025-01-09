import { boot } from 'quasar/wrappers';
import { LocalStorage, Dark } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // Dark Mode 설정
  console.log('### initialization ###');

  const darkMode = LocalStorage.getItem('darkMode');
  Dark.set(darkMode);
});
