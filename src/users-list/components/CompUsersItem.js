import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';

const CompUsersItem = (props) => {
  const { id, name, age, hobby, handleDeleteUser, fromDetailsPage } = props;

  return (
    <div className={`${fromDetailsPage ? 'col-md-offset-4' : ''} col-md-4 users-item-col`}>
      <div className="users-item">
        <Link to={fromDetailsPage ?  '#' : `/${routes.USERSLISTPAGE}/${id}`}>
          <h1>{name}</h1>
          <p>Age: {age}</p>
          <p>Hobby: {hobby}</p>
          
          <div className="users-item-bcg"></div>
          
          <div
            className="users-item-del"
            onClick={ e => handleDeleteUser(e, id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </div>
        </Link>
      
      </div>
    </div>
  );
};

export default CompUsersItem;