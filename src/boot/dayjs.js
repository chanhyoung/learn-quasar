import { boot } from 'quasar/wrappers';
import dayjs from 'dayjs';

export default boot(({ app }) => {
  app.config.globalProperties.$dayjs = dayjs;
  app.provide('dayjs', dayjs);
});
