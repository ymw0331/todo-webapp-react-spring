import React, { Component } from "react"
import TodoDataService from "../../api/todo/TodoDataService"
import AuthenticationService from "./AuthenticationService"

class ListTodoComponent extends Component {
    constructor(props) {
        console.log("constructor")
        super(props)
        this.state = {
            todos: [],
            message: ""
        }
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)

    }

    componentWillUnmount() {
        console.log("component Unmount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        console.log(nextProps)
        console.log(nextState)
        return true;
    }

    componentDidMount() { //lifecycle method
        console.log("componentDidMount")
        this.refreshTodos()
        console.log(this.state)
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    // console.log(response)
                    this.setState({ todos: response.data })
                })

            .catch(error => console.log(error))
    }

    updateTodoClicked(id) {
        console.log("Update " + id)

        // /todos/${id}
        this.props.history.push(`/todos/${id}`)
        

    }


    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        // console.log(id + " " + username)
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of todo ${id} Successful` })
                    this.refreshTodos()
                }
            )
    }

    render() {
        console.log("render")

        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>id</th> */}
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>IsCompleted?</th>
                                <th>Update</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            {/* <td>{todo.id}</td> */}
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td><button onClick={() => this.updateTodoClicked(todo.id)} className="btn btn-success">Update</button></td>
                                            <td><button onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-warning">Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodoComponent;