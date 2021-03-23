import './assets/css/Register.css'
import './assets/css/Reimburse.css'
import './assets/css/Forget.css'
import './assets/css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Dashboard.css'
import './assets/css/Form.css'
import './assets/css/EmployeeDetails.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Provider } from 'react-redux';
import store from './configs/store';
import routes from "./configs/routes";


function App() {
    return (
        <div >
            <Provider store={store}>
                <Router>
                    <Switch style={{ paddingLeft: "0" }}>
                        {
                            routes.map((route, index) =>
                                <Route key={index} path={route.path} exact={route.exact}>
                                    {route.component}
                                </Route>)
                        }
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
