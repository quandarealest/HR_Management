import { service } from './configAPI';

export const getAccountList = () => {
  return service.get('/accounts'); 
}

export const addAccount = (data) => {
  return service.post('/accounts', data);
}

export const deleteAccount = (userId) => {
  return service.delete(`/accounts/${userId}`);
}

export const updateAccount = (userId, newUser) => {
  return service.put(`/accounts/${userId}`, newUser);
}