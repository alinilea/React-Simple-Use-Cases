import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './common/ScrollToTop';

//pages
import CompHeader from './common/CompHeader';
import HomePage from './homepage/containers/ContHomePage';
import UsersListPage from './users-list/containers/ContUsersListPage';
import UserPage from './user-details/containers/ContUserDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
// import ContactPage from './contact/containers/ContContactPage';
import CompFooter from './common/CompFooter';

//config
import { routes } from './utils/routes';

const Router = () => (
  <BrowserRouter>
    <div>
      <CompHeader />
      
      <ScrollToTop>
        <Switch>
          <Route
            exact 
            path="/" 
            component={HomePage}
          />
          
          <Route
            exact 
            path={`/${routes.USERSLISTPAGE}`} 
            component={UsersListPage}
          />
          {/*
          <Route
            exact 
            path={`/${routes.CONTACT}`} 
            component={ContactPage}
          />
          */}
          <Route
            exact 
            path={`/${routes.USERSLISTPAGE}/:id`}
            component={UserPage}
          />
          
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </ScrollToTop>
      
      <CompFooter />
    </div>
  </BrowserRouter>
);

export default Router;
