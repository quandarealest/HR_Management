export const ACTION_TYPES = {
  GET_USERS: 'users/GET_USERS',
  GET_USERS_SUCCESS: 'users/GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'users/GET_USERS_FAILURE',
  ADD_USER: 'users/ADD_USER',
  UPDATE_USER: 'users/UPDATE_USER',
  DELETE_USER: 'users/DELETE_USER',
};

const getUsers = () => ({
  type: ACTION_TYPES.GET_USERS,
})

const getUsersSuccess = (payload) => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  payload
})

const getUsersFailure = error => ({
  type: ACTION_TYPES.GET_USERS_FAILURE,
  error
})

const updateUser = (payload) => ({
  type: ACTION_TYPES.UPDATE_USER,
  payload,
})

const addUser = (payload) => ({
  type: ACTION_TYPES.ADD_USER,
  payload
})

const deleteUser = (payload) => ({
  type: ACTION_TYPES.DELETE_USER,
  payload,
})

const initialState = {
  userList: [],
  getError: null,
}

export const actions = {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  addUser,
  deleteUser,
  updateUser,
}

const userReducers = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.UPDATE_USER: {
      const userInfo = action.payload;
      let newUserList = state.userList;
      newUserList = newUserList.filter(item => item._id !== userInfo._id);
      newUserList = [ ...newUserList, userInfo ]
      return {
        ...state,
        userList: newUserList,
      }
    }
    case ACTION_TYPES.GET_USERS_SUCCESS:
      return {
        ...state,
        userList: action.payload
      }
    case ACTION_TYPES.GET_USERS_FAILURE:
      return {
        ...state,
        getError: action.error
      }
    case ACTION_TYPES.ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload]
      }
    case ACTION_TYPES.DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter(item => item._id !== action.payload)
      }
    default:
      return state;
  }
}

export default userReducers;