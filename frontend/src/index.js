import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'materialize-css'
import './index.css';
import Match from "./screens/Match/Match";
import Admin from "./screens/Admin/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path="/">{"Home"}</Route>
              <Route exact path="/admin"><Admin/></Route>
              <Route exact path="/m/:matchID"><Match/></Route>
              <Route exact path="/m/:matchID/console">{"Match Console Panel"}</Route>
              <Route>{"404 Not Found"}</Route>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
