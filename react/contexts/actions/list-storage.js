import AsyncStorage from '@react-native-async-storage/async-storage';

export function getLists() {
  return AsyncStorage.getItem('lists').then(data => JSON.parse(data || ''));
}

export async function editList(list) {
  let data = JSON.parse((await AsyncStorage.getItem('lists')) || '[]');
  data = data.map(_it => (_it._id !== list._id ? _it : list));
  await AsyncStorage.setItem('lists', JSON.stringify(data));
  return list;
}

export async function addList(list) {
  let data = JSON.parse((await AsyncStorage.getItem('lists')) || '[]');
  data = [...data, {_id: Date.now(), ...list}];
  await AsyncStorage.setItem('lists', JSON.stringify(data));
  return list;
}
export async function deleteList(list) {
  let data = JSON.parse((await AsyncStorage.getItem('lists')) || '[]');
  data = data.filter(_it => _it._id !== list._id);
  await AsyncStorage.setItem('lists', JSON.stringify(data));
  return true;
}
