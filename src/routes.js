import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import Landing from './pages/Landing';
import Account from './pages/Account';
import Home from './pages/Home';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';
import LoggedLanding from './pages/LoggedLanding'
import Hackathon from './pages/Hackathon'
const routes = (
  <App>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path="/account" exact component={Account} />
      <Route path="/register" exact component={Registration} />
      <Route path="/home" exact component={Home} />
      <Route path="/loggedlanding" exact component={LoggedLanding}/>
      <Route path="/hackathon" exact component={Hackathon}/>
      <Route component={NotFound} />
    </Switch>
  </App>
)

export { routes };