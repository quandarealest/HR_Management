import { connect } from 'react-redux';
import UserAddNew from '../../components/UserAddNew/UserAddNew';
import { actions as userActions } from '../../reducers/userReducers';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addUser: userActions.addUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddNew);