import React from "react";

//Update object in class
class Updateobject extends React.Component {
    constructor() {
        super();
        this.state = {color: "Red", Model:"Ford"}
    }

    render(){

       return (
          <>
            <h1>My Car color is {this.state.color} and Model is {this.state.Model}</h1>
            <button onClick={ () => {this.setState(previousstate => { return {...previousstate,color:"Blue"} }) } }>Change Color in Class State</button>
          </>
        )
    }
}

export default Updateobject;