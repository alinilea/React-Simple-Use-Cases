import React from 'react';
import CompUsersItem from '../../users-list/components/CompUsersItem';

const CompUserDetailsPage = (props) => {
  const { userDetails, handleDeleteUser } = props;

  return (
    <div className="container">
      { userDetails.length ?
        <CompUsersItem
          id={userDetails[0].id}
          name={userDetails[0].name}
          age={userDetails[0].age}
          hobby={userDetails[0].hobby}
          handleDeleteUser={handleDeleteUser}
          fromDetailsPage={true}
        />
        :
        <p>Sorry! No user found!</p>
      }
    </div>
  );
};

export default CompUserDetailsPage;