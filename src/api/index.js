import axios from 'axios';
import { setInterceptors } from 'src/api/common/interceptors';

const baseUrl = import.meta.env.VITE_APP_API_URL;

// 액시오스 초기화 함수
function createInstanceWithAuth(url, options) {
  const instance = axios.create({
    baseURL: `${baseUrl}/${url}`,
    ...options,
  });
  return setInterceptors(instance);
}

function createInstanceWithByPass(url, options) {
  const instance = axios.create({
    baseURL: `${baseUrl}/${url}`,
    ...options,
  });
  return instance;
}

export const posts = createInstanceWithByPass('posts');
export const admin = createInstanceWithAuth('admin');
