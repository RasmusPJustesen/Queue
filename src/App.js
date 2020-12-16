import React, { Component } from 'react';
import Dashboard from './components/layouts/Dashboard';
import Header from './components/layouts/Header';
import CreateRoom from './components/dashboard/CreateRoom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Room from './components/layouts/Room';
import Profile from './components/layouts/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App blue-grey darken-1 vh-100">
          <Header />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route exact path='/create'component={CreateRoom} />
            <Route path='/login'component={SignIn} />
            <Route path='/register'component={SignUp} />
            <Route path='/queue/:id'component={Room} />
            <Route path='/profile'component={Profile} />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
