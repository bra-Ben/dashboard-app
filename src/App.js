// import {Login, Signup, Dashboard} from './pages'

import { Switch, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Dashboard from "./pages/dashboard/dashboard";
// import { Route } from 'react-router';

function App() {
   return (
      <div className="App">
         <Switch>
            <Route path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route
               path="/dashboard"
               component={Dashboard}
            />
         </Switch>
      </div>
   );
}
export default App;
