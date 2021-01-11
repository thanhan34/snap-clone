import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from './Preview';
import WebcamCapture from './WebcamCapture';
import './App.css'
function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">

          <Switch>
            <Route exact path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>

        </div >
      </Router>
    </div >
  );
}

export default App;
