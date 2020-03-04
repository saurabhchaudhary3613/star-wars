import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginPage from './components/pages/LoginPage';
import PlanetsPage from './components/pages/PlanetsPage';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.scss';

const App = () => {
  //Init Materialize JS
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route path='/planets' component={PlanetsPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
