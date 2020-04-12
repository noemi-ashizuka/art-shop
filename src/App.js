import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

const PotteryPage = () => (
  <div>
      <h1>POTTERY PAGE</h1>
  </div>
);

function App() {
  return (
  <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/pottery' component={PotteryPage} />
    </Switch>
  </div>
  );
}

export default App;
