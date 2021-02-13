import { Profiler } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ControlPainel, Login, Profile, Register } from "./app";


function Routes() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/controlPainel" component={ControlPainel}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
