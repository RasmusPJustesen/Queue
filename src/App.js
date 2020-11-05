import React from 'react';
import Dashboard from './components/dashboard/Dashboard.js'; 
import Navbar from './components/layouts/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Profile from './components/user/Profile.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App blue-grey darken-1">
        <Navbar />
        <Switch>
          <Route exact path='/'component={Dashboard} />
          <Route path='/login'component={SignIn} />
          <Route path='/register'component={SignUp} />
          <Route path='/profile'component={Profile} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
