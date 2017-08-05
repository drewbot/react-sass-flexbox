import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Overview from './containers/Overview';
import ClassesDetail from './containers/ClassesDetail';
import VariablesDetail from './containers/VariablesDetail';
import MixinsDetail from './containers/MixinsDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Overview</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/variables">Variables</Link></li>
            <li><Link to="/mixins">Mixins</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Overview}/>
          <Route exact path="/classes" component={ClassesDetail}/>
          <Route exact path="/variables" component={VariablesDetail}/>
          <Route exact path="/mixins" component={MixinsDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
