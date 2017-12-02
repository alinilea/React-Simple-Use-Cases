import React from 'react';
import CompUsersItem from './CompUsersItem';

const CompUsersListPage = (props) => {
  const { usersList, handleDeleteUser } = props;
  
  return (
    <div className="container">
      <div className="col-md-12">
        { usersList.map((user, index) => {
            return  <CompUsersItem
                      key={index}
                      {...user}
                      handleDeleteUser={handleDeleteUser}
                    />;
          })
        }
      </div>
    </div>
  );
};

export default CompUsersListPage;