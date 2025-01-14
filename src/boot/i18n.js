import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { LocalStorage } from 'quasar';
import messages from 'src/i18n';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  const locale = LocalStorage.getItem('lang') || 'en-US';
  const i18n = createI18n({
    legacy: false,
    locale,
    // globalInjection: true,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
