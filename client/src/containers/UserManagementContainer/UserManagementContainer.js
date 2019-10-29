import { connect } from 'react-redux';
import UserManagement from '../../components/UserManagement/UserManagement';
import { actions as userActions } from '../../reducers/userReducers';
import { actions as accountActions } from '../../reducers/accountReducers';

const mapStateToProps = state => {
  return {
    userList: state.users.userList,
    account: state.accounts.account,
  }
};

const mapDispatchToProps = {
  getUserList: userActions.getUsers,
  deleteUser: userActions.deleteUser,
  updateUser: userActions.updateUser,
  getAccount: accountActions.getAccount,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);