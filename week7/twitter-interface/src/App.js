import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Explore from './components/templates/Explore';
import Home from './components/templates/Home';
import Login from './components/templates/Login';
import Notifications from './components/templates/Notifications';
import Profile from './components/templates/Profile';
import Signup from './components/templates/Signup';
import data from './data.json';
import './styles.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" render={() => <Home feed={data} />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/explore" render={() => <Explore feed={data} />} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/profile" render={() => <Profile feed={data} background="https://images.unsplash.com/photo-1600123460502-dc4bd4727b22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />} />
    </Switch>
  );
}

export default App;
