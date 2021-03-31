import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavManu from './components/NavManu/NavManu';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState([]);

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <NavManu />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <PrivateRoute exact path="/admin">
                        <Admin />
                    </PrivateRoute>
                    <Route exact path="/orders">
                        <Orders />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;
