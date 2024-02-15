import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Profile from "../Profile /Profile";

function ProtectedRoute({ isLoggedIn, component: Component, ...props }) {
  return (
    <Route {...props}>{isLoggedIn ? Component : <Redirect to="/" />}</Route>
  );
}

export default ProtectedRoute;
