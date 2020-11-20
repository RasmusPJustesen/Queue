import React from 'react';
import Dashboard from './components/layouts/Dashboard';
import Navbar from './components/layouts/Header';
import CreateRoom from './components/dashboard/CreateRoom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="App blue-grey darken-1">
        <Navbar />
        <Switch>
          <Route exact path='/'component={Dashboard} />
          <Route exact path='/createroom'component={CreateRoom} />
          <Route path='/login'component={SignIn} />
          <Route path='/register'component={SignUp} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
