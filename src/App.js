import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PlaceOrder from './components/PlaceOrderPage/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CustomerStatus from './components/CustomerStatus/CustomerStatus';
import AdminServiceStatus from './components/AdminServiceStatus/AdminServiceStatus';
import AdminAddService from './components/AdminAddService/AdminAddService/AdminAddService';
import ReviewPage from './components/ReviewPage/ReviewPage/ReviewPage';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/customerStatus">
            <CustomerStatus></CustomerStatus>
          </Route>
          <Route path="/adminServiceStatus">
            <AdminServiceStatus></AdminServiceStatus>
          </Route>
          <Route path="/adminAddService">
            <AdminAddService></AdminAddService>
          </Route>
          <Route path="/reviewPage">
            <ReviewPage></ReviewPage>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
