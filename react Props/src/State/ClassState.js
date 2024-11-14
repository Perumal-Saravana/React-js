import React, {Component} from "react";

class ClassState extends Component {
    constructor(){
        super();
            this.state = {Team:"Pun"}
    }
    render(){
        return(
            <>
              <h1>My Fav Team in {this.state.Team}</h1> 
              <button onClick={() => {this.setState({Team:"SRH"})}}>Click and see</button>
            </>
        )
    }
}
export default ClassState;