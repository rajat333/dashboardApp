import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Dashboard from './pages/Dashboard';
import history from './pages/history/history';
import './App.css';

class App extends Component {

  constructor(props){
      super(props);
      console.log("in app construct");
  }

  componentDidMount(){
    console.log("in app component did mount",history);
    history.listen(function(a,b,c){
      console.log("sdjfnsdjfnsjdfnsd");
    })
  }
  render() {
     console.log("App render history ",history);
    return(
      <Router history={ history }>
        <Switch>
      <div className="App">
        {/* <div className="App__Aside"></div> */}
        <div className="App__Form">
          {/* <div className="PageSwitcher">
            <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
          </div> */}

          <div className="FormTitle">
            <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or 
            <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink> 
            </div>
            <Route path="/dashboard" component={ Dashboard  }>
            </Route>
            <Route exact path="/" component={SignUpForm}>
            </Route>
            <Route path="/sign-in" component={SignInForm}>
            </Route>
            
        </div>
      </div>
      </Switch>
      </Router>
    );
  }
}


export default App;
