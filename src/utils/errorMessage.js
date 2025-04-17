import { Dialog } from 'quasar';

export function errorMessage(errorMessage) {
  Dialog.create({
    title: '에러',
    message: errorMessage,
  });
}
