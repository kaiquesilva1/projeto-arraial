import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ControlPainel, Login, Profile, Register } from "./app";



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/controlPainel" component={ControlPainel} />
      </Switch>
    </BrowserRouter>
  );
}
