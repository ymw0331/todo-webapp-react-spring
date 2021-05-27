import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import AuthenticatedRoute from "./AuthenticatedRoute"
import LoginComponent from "./LoginComponent"
import ListTodoComponent from "./ListTodoComponent"
import WelcomeComponent from "./WelcomeComponent"
import LogoutComponent from "./LogoutComponent"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import ErrorComponent from "./ErrorComponent"

import TodoComponent from "./TodoComponent"


//parent component
class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                            <AuthenticatedRoute path="/todos" component={ListTodoComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}

export default TodoApp