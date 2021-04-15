import { Route, Redirect } from 'react-router-dom';
import { AccessTokenContext } from '../../context/AccessTokenContext';
import { useContext } from 'react';

export default function ProtectedRoute ({ children }) {
  const {isLoggedIn} = useContext(AccessTokenContext);
  return ( isLoggedIn()
    ? <Route>{children}</Route>
    : <Redirect to="/login"/>
  )
}