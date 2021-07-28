import AsyncStorage from '@react-native-async-storage/async-storage';
import queryString from 'query-string';

export default async function request(host, options = {}) {
  options.headers = {
    'Content-type': 'application/json',
    Accept: 'application/json',
    ...(options.headers || {}),
  };
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }
  const token = await AsyncStorage.getItem('jwt_token');
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  if (options.query) {
    host = host + '?' + queryString.stringify(options.query);
    delete options.query;
  }

  return fetch(host, options);
}
