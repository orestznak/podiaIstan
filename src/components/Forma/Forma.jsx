import React, { Component } from "react";

class FormaUser extends Component {
    state = {
        // todos: initialTodos,
        inputValue: '',

    };
    handleInputChange=event =>{
        // console.log(event.currentTarget.value)
        this.setState({inputValue:event.currentTarget.value })
    }

    render() {

        return(
            <input type="text"
            value={this.state.inputValue} 
            onChange={this.handleInputChange}/>
        )
    };
}

export default FormaUser;