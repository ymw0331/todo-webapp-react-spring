import { Field, Form, Formik } from "formik"
import React, { Component } from "react"
import AuthenticationService from "./AuthenticationService"

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "wayneyong",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)

    }

    handleChange(event) {
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClick() {
        if (this.state.username === "wayneyong" && this.state.password === "123456") {

            //store in session storage
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)

            // console.log("Successful")
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })


        }
        else {
            // console.log("Failed")
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
        // console.log(this.state)
    }

    render() {
        return (
            // username: "wayneyong",
            // password: "",
            // hasLoginFailed: false,
            // showSuccessMessage: false
 

            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credential</div>}
                    {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}

                    <Formik>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field
                                            className="form-control"
                                            type="text"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.handleChange}>
                                        </Field>
                                    </fieldset>


                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}>
                                        </Field>
                                    </fieldset>


                                    <button className="btn btn-success" onClick={this.loginClick}>Login</button>
                                </Form>


                            )
                        }
                    </Formik>


                            {/* Name:
                            <input
                        type="text"
                        name="username"
                    />

                            Password:
                            <input
                        type="password"
                        name="password"

                    /> */}




                </div>
            </div>
        )
    }
}


export default LoginComponent;