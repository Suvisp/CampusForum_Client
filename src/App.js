import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';

import './App.css';
import { Home } from './components/Home';
import ForumPage from './components/ForumPage';
import Extra from './components/Extra';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="Content">
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/forumPage" exact component={ForumPage}/>
      <Route path="/extra" exact component={Extra}/>
      </Switch>
      </div>
    </div>
  );
}

export default App;