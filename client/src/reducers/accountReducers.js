export const ACTION_TYPES = {
  GET_ACCOUNTS: 'accounts/GET_ACCOUNTS',
  GET_ACCOUNTS_SUCCESS: 'accounts/GET_ACCOUNTS_SUCCESS',
  GET_ACCOUNTS_FAILURE: 'accounts/GET_ACCOUNTS_FAILURE',
  ADD_ACCOUNT: 'accounts/ADD_ACCOUNT',
  DELETE_ACCOUNT: 'accounts/DELETE_ACCOUNT',
  UPDATE_ACCOUNT: 'accounts/UPDATE_ACCOUNT',
}

const getAccounts = () => ({
  type: ACTION_TYPES.GET_ACCOUNTS,
})

const getAccountsSuccess = (payload) => ({
  type: ACTION_TYPES.GET_ACCOUNTS_SUCCESS,
  payload
})

const getAccountsFailure = (error) => ({
  type: ACTION_TYPES.GET_ACCOUNTS_FAILURE,
  error
})

const addAccount = (payload) => ({
  type: ACTION_TYPES.ADD_ACCOUNT,
  payload
})

const initialState = {
  accountList: [],
  error: null,
}

export const actions = {
  getAccounts,
  getAccountsSuccess,
  getAccountsFailure,
  addAccount
}

const accountReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.GET_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accountList: action.payload
      }
    case ACTION_TYPES.GET_ACCOUNTS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case ACTION_TYPES.ADD_ACCOUNT:
      return {
        ...state,
        accountList: [...state.accountList, action.payload]
      }
    case ACTION_TYPES.DELETE_ACCOUNT:
      return {
        ...state,
        accountList: state.accountList.filter(item => item.userId !== action.payload)
      }
    default:
      return state;
  }
}

export default accountReducer;