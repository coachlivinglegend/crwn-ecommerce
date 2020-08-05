import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/Shop/Shop'
import Header from './Components/Header/Header'
import SignUpAndSignIn from './Pages/SignInAndUp/SignInAndUp'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignUpAndSignIn}/>
      </Switch>
    </div>
  );
}

export default App;
