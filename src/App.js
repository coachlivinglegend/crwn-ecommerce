import React from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/Shop/Shop'
import Header from './Components/Header/Header'
import SignUpAndSignIn from './Pages/SignInAndUp/SignInAndUp'
import { auth, createUserProfileDocument } from './Firebase/firebase.utils'
import { setCurrentUser } from './redux/User/UserActions';


class App extends React.Component  {
  unscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unscribeFromAuth()
  }

  render () {
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
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}
export default connect(null, mapDispatchToProps)(App);