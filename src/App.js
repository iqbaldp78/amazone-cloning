import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from "./Home";
import Checkout from "./Checkout"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Component/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    //will only run once when app component loads ....

    const unsubscribe = auth.onAuthStateChanged(authUser => {

      if (authUser) {
        //user login

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //user logout

        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    //BEM
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>

          <Route path="/checkout">
            {!user ? <Redirect to="/login" /> : (<><Header /><Checkout /></>)}
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
