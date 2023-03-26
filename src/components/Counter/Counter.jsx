import React from "react";
import Controls from "./Controls";
import Value from "./Value"

import  "./Counter.css"

class Counter extends React.Component{
    static defaultProps = {
        intialValue: 0,
    }
    state = {
        value:this.props.intialValue,
    };

    handleIncrement = () => {
        this.setState((prevState) =>{
            return {
                value: prevState.value + 1,
            }
        })
   }

    handleDecrement =() => {
        this.setState((prevState)=>{
            return {
                value: prevState.value -1,
            }
        })
    }

    render() {
        return (

        <div className="Counter">
            <Value value={this.state.value}/>

            <Controls onIncrement={this.handleIncrement}
                      onDecrement={this.handleDecrement}/>
        </div>
        )
    }
}

export default Counter