import request from '../../utils/request';

export function getCodes(filters) {
  return request('http://localhost:3000/codes', {query: filters}).then(res =>
    res.json(),
  );
}
export function editCode(item) {
  return request('http://localhost:3000/codes/' + item._id, {
    body: item,
    method: 'PUT',
  }).then(res => res.json());
}
export function addCode(item) {
  return request('http://localhost:3000/codes', {
    body: item,
    method: 'POST',
  }).then(res => res.json());
}
export function deleteCode(item) {
  return request('http://localhost:3000/codes/' + item._id, {
    method: 'DELETE',
  }).then(res => {
    if (res.status === 204) return true;
    throw new Error(res.status);
  });
}
