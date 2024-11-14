import React, { Component } from "react";

//Class props
class Car extends Component{
    render() {
        const {Amount} = this.props;
        const {Rupees} = Amount;

        return(
            <h2>BMW Car Price is {Rupees}</h2>
        )
    }
}
export default Car;