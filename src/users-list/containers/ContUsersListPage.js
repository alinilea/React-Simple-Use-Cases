import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import ScrollToTopOnMount from '../../common/ScrollToTopOnMount';
import CompUsersListPage from '../components/CompUsersListPage';

import * as actions from '../store/actions';
import * as user from '../store/selector';

const mapStateToProps = (state) => {
  return {
    usersList: user.getUsersList(state).toJS()
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

class ContUsersListPage extends Component {
  constructor(props) {
    super(props);
    
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }
  
  componentWillMount() {
    // this.props.getUsers(this.props.history.push);
    this.props.setUsersList();
  }
  
  handleDeleteUser(e, id) {
    console.log('I am now in handleDeleteUser');
    // return (e) => {
      e.preventDefault();
      console.log('delete the user with id = ', id);
    // };
  }
  
  render() {
    const {usersList} = this.props;
    
    return (
      <div className="users-list">
      {/* <ScrollToTopOnMount /> */}
        <CompUsersListPage
          usersList={usersList}
          handleDeleteUser={this.handleDeleteUser}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContUsersListPage);