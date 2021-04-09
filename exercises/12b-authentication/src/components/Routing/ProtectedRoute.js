import {Redirect, Route} from 'react-router-dom';

const ProtectedRoute = ({children, isLoggedIn}) => {
    return isLoggedIn ? (
        <Route>{children}</Route>
    ) : (
        <Redirect to="/login" />
    )
}

export default ProtectedRoute;
