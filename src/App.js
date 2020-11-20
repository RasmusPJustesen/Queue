import React from 'react';
import Dashboard from './components/layouts/Dashboard';
import Header from './components/layouts/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Room from './components/layouts/Room';

function App() {
  return (
    <BrowserRouter>
      <div className="App blue-grey darken-1 vh-100">
        <Header />
        <Switch>
          <Route exact path='/'component={Dashboard} />
          <Route path='/login'component={SignIn} />
          <Route path='/register'component={SignUp} />
          <Route path='/queue'component={Room} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
