import AsyncStorage from '@react-native-async-storage/async-storage';

export default function login(username, password) {
  return AsyncStorage.getItem('token');
}
