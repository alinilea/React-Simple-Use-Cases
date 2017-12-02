import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../utils/routes';

const header = {
  padding: '30px 35px',
  borderRadius: '4px',
  backgroundColor: '#40413d',
  color: 'white',
};

const footer = {
  color: '#4ca8a2',
};

const CompNavigation = (props) => {
  const { fromFooter } = props;
  
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink
            exact
            to="/"
            activeStyle={fromFooter ? footer : header}
          >
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink
            strict
            to={`/${routes.USERSLISTPAGE}`}
            activeStyle={fromFooter ? footer : header}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default CompNavigation;