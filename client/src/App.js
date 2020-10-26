import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/Shop/Shop'
import Header from './Components/Header/Header'
import SignUpAndSignIn from './Pages/SignInAndUp/SignInAndUp'
import CheckoutPage from './Pages/Checkout/Checkout'
// import { auth, createUserProfileDocument } from './Firebase/firebase.utils'
// import { setCurrentUser } from './redux/User/UserActions';
import { selectCurrentUser } from './redux/User/UserSelectors'
import { checkUserSession } from './redux/User/UserActions'
// import { selectCartItems } from './redux/Cart/CartSelectors.js'
// import { selectShopCollectionsForPreview } from './redux/Shop/ShopSelectors'


const App = ({ checkUserSession, currentUser }) => {
  // unsubscribeFromAuth = null;
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  // componentDidMount() {
  //   checkUserSession()

  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   //   if (userAuth) {
  //   //     const userRef = await createUserProfileDocument(userAuth);

  //   //     userRef.onSnapshot(snapShot => {
  //   //       setCurrentUser({
  //   //           id: snapShot.id,
  //   //           ...snapShot.data()
  //   //       })
  //   //     })
  //   //   } else {
  //   //     setCurrentUser(userAuth)
  //   //   }
  //   // })
  // }


  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : <SignUpAndSignIn/> } />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
})

// const mapDispatchToProps = dispatch => {
//   return {
//     setCurrentUser: user => dispatch(setCurrentUser(user))
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    checkUserSession: () => dispatch(checkUserSession())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);