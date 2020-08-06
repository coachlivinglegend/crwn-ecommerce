import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/Shop/Shop'
import Header from './Components/Header/Header'
import SignUpAndSignIn from './Pages/SignInAndUp/SignInAndUp'
import { auth, createUserProfileDocument } from './Firebase/firebase.utils'


class App extends React.Component  {
  constructor () {
    super();

    this.state = {
      currentUser: null
    }
  }

  unscribeFromAuth = null;

  componentDidMount() {
    this.unscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({currentUser: userAuth})
      }
    })
  }


  componentWillUnmount() {
    this.unscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignUpAndSignIn}/>
        </Switch>
      </div>
    );
  }  
}

export default App;
