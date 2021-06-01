import React from "react";
import ReactDOM from "react-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ValidatedLoginForm from "./ValidatedLoginForm";
import Register from './Registration';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login" exact>
                        <ValidatedLoginForm />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/home" exact>
                        <div> home page </div>
                    </Route>
                    <Route path="*">
                        <div />
                    </Route>
                </Switch>
                {/* <h1>Đăng nhập</h1>
            <ValidatedLoginForm /> */}
            </div>
        </Router>
    );
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);