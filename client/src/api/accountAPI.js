import { service } from './configAPI';

export const getAccountList = () => {
  return service.get('/accounts'); 
}

export const getAccount = (userId) => {
  return service.get(`/accounts/${userId}`);
}

export const addAccount = (data) => {
  return service.post('/accounts', data);
}

export const updateAccount = (userId, newUser) => {
  return service.put(`/accounts/${userId}`, newUser);
}