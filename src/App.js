import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import configureStore from "./redux/configureStore";
import HomePage from './screens/homepage';
import AllCountries from './screens/modalA';
import UsCountries from './screens/modalB';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Router>
          <Route path='/' component={HomePage} />
          <Route path='/all-countries' component={AllCountries} />
          <Route path='/us-countries' component={UsCountries} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
