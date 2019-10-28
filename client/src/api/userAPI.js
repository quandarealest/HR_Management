import { service } from './configAPI';

export const getUserList = () => {
  return service.request({
    method: 'GET',
    url:`/users`
  })
}

export const addUser = (data) => {
  return service.request({
    method: 'POST',
    url:`/users`,
    data
  })
}

export const deleteUser = (id) => {
  return service.request({
    method: 'DELETE',
    url:`/users/${id}`
  })
}

export const updateUser = (id, newUser) => {
  return service.put(`/users/${id}`, newUser)
}