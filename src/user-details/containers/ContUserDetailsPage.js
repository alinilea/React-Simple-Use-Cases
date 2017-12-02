import React, { Component } from 'react';
import CompUserDetailsPage from '../components/CompUserDetailsPage';
// import ScrollToTopOnMount from '../../common/ScrollToTopOnMount';
import { users } from '../../data/data';

class ContUserDetailsPage extends Component {
  constructor(props) {
    super(props);
    
    this.showUserDetails = this.showUserDetails.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }
  
  showUserDetails(id) {
    const userId = +id;
    let userDetails = users.filter(user => user.id === userId);

    return userDetails && userDetails.length  ? userDetails : [];
  }
  
  // componentWillMount() {
  //   const { id } = this.props.match.params;
  //   console.log(id)
  //   this.showUserDetails(id);
  // }
  
    
  handleDeleteUser(e, id) {
    console.log('I am now in handleDeleteUser');
    // return (e) => {
      e.preventDefault();
      console.log('delete the user with id = ', id);
    // };
  }
  
  render() {
    const { id } = this.props.match.params;
    const userDetails = this.showUserDetails(id);
    
    return (
      <div className="container-fluid user-details">
      {/* <ScrollToTopOnMount /> */}
        <CompUserDetailsPage
          userDetails={userDetails}
          handleDeleteUser={this.handleDeleteUser}
        />
      </div>
    );
  }
}

export default ContUserDetailsPage;