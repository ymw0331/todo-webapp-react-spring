import React, { Component } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import HelloWorldService from "../../api/todo/HelloWorldService.js"

class WelcomeComponent extends Component {
    
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: ""
        }

        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)


    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container"> Welcome {this.props.match.params.name}.
                You can manage your todos <Link to="/todos">here.</Link></div>

                Click here to get customised welcome message.
                <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>

                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        //     .then(response => this.handleSuccessfulResponse(response))


        // HelloWorldService.executeHelloWorldBeanService()
        //     .then(response => this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }


    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({
            welcomeMessage: response.data.message
        })
    }

    handleError(error) {
        console.log(error.response)
        let errorMessage = ""
        
        if (error.message)
            errorMessage += error.message

        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }

        this.setState({
            welcomeMessage: errorMessage
        })
    }

}
export default WelcomeComponent;