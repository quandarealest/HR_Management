export const ACTION_TYPES = {
  GET_ACCOUNT: 'accounts/GET_ACCOUNT',
  GET_ACCOUNT_SUCCESS: 'accounts/GET_ACCOUNT_SUCCESS',
  GET_ACCOUNT_FAILURE: 'accounts/GET_ACCOUNT_FAILURE',
  ADD_ACCOUNT: 'accounts/ADD_ACCOUNT',
  UPDATE_ACCOUNT: 'accounts/UPDATE_ACCOUNT',
}

const getAccount = (payload) => ({
  type: ACTION_TYPES.GET_ACCOUNT,
  payload,
})

const getAccountSuccess = (payload) => ({
  type: ACTION_TYPES.GET_ACCOUNT_SUCCESS,
  payload
})

const getAccountFailure = (error) => ({
  type: ACTION_TYPES.GET_ACCOUNT_FAILURE,
  error
})
const initialState = {
  account: {},
  error: null,
}

export const actions = {
  getAccount,
  getAccountSuccess,
  getAccountFailure,
}

const accountReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: action.payload
      }
    case ACTION_TYPES.GET_ACCOUNT_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export default accountReducer;