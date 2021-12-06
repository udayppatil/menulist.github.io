//  import { Switch } from "@material-ui/core";
import React from "react";
import { Switch,Route} from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu"
import Service from "./Service";
import User from "./User";
import Search from "./Search"
const App =()=>{
  const Name=()=>{
    return<h1>Hello, i am Name page</h1>
  }
return(
  <>
  <Menu/>
  <Switch>
    <Route exact path='/'  component={()=><About name="About"/>} />
    <Route exact path='/contact'  render={()=><Contact name="Contact"/>}/>
    <Route exact path='/service'  component={Service}/>
    <Route path='/Name'  component={Name}/>
    <Route path="/user/:fname/:lname" component={User} />
    <Route path="/search" component={Search}/>
    <Route   component={Error}/>
  </Switch>
  </>
);
};
export default App;
