import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layouts/Navbar';
import Profile from './components/profile/Profile';
import Queue from './components/queue/Queue';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'component={Dashboard} />
          <Route path='/profile'component={Profile} />
          <Route path='/create'component={Queue} /> 
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
