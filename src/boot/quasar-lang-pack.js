import { boot } from 'quasar/wrappers';
import { LocalStorage, Quasar } from 'quasar';

// const availableLanguages = {
//   'en-US': () => import('../../node_modules/quasar/lang/en-US'),
//   'ko-KR': () => import('../../node_modules/quasar/lang/ko-KR'),
//   'fr-FR': () => import('../../node_modules/quasar/lang/fr-FR'),
// };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  const val = LocalStorage.getItem('lang') || 'en-US';
  console.log('boot lang: ', val);
  import(/* @vite-ignore */ '../../node_modules/quasar/lang/' + val).then(
    lang => {
      Quasar.lang.set(lang.default);
    },
  );
});
