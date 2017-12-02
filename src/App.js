import React, { Component } from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router />
    </Provider>
    );
  }
}

export default App;
