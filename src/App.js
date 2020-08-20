import React from 'react';
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'component={Dashboard} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
