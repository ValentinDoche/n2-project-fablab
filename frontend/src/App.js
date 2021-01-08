import Index from "./pages/index";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { React, useState } from "react";
import {AuthContext} from "./context/auth";
import NotFound from "./pages/404";
import Login from "./pages/login";
import PrivateRoute from "./PrivateRoute";

function App() {
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens, setTokens }}>
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path={"/"} component={Index} />
                    <PrivateRoute exact path={"/profile"} component={Index} />
                    <PrivateRoute exact path={"/devices"} component={Index} />
                    <PrivateRoute exact path={"/functionality"} component={Index} />
                    <Route exact path={"/login"} component={Login} />
                    <Route exact path={"*"} component={NotFound} />
                </Switch>
            </BrowserRouter>
        </AuthContext.Provider>
    );

}

export default App;
