import { connect } from 'react-redux';
import UserManagement from '../../components/UserManagement/UserManagement';
import { actions as userActions } from '../../reducers/userReducers';

const mapStateToProps = state => {
  return {
    userList: state.users.userList,
  }
};

const mapDispatchToProps = {
  getUserList: userActions.getUsers,
  deleteUser: userActions.deleteUser,
  updateUser: userActions.updateUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);