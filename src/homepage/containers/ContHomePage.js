import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
// import ScrollToTopOnMount from '../../common/ScrollToTopOnMount';

class ContHomePage extends Component {
  constructor(props) {
    super(props);
    this.redirectToUsers = this.redirectToUsers.bind(this);
  }
  
  redirectToUsers() {
    const { history: { push } } = this.props;
    push('/users');
  }
  
  render() {
    return (
      <div className="home">
      {/* <ScrollToTopOnMount /> */}
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        <Jumbotron>This is a Jumbotron</Jumbotron>
        
        <Button onClick={this.redirectToUsers}>Go to Users List Page</Button>
      </div>
    );
  }
}

export default ContHomePage;