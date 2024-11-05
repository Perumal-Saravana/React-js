import React from "react";

//Class State
class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "Red"}
    }

    render(){

       return (
          <>
            <h1>My Car color is {this.state.color}</h1>
            <button onClick={ () => {this.setState({color:"Blue"})}}>Change Color in Class State</button>
          </>
        )
    }
}

export default Car;