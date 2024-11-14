import React, { Component } from "react";

class Updateclass extends Component {
    constructor(){
        super();
          this.state = {Sixes:10, Run: 77}
    }

    render(){
        return(
            <>
              <h1>Klassen hit {this.state.Sixes} Sixes and {this.state.Run} Run</h1>
              <button onClick={() => {this.setState((previosState) => {return{...previosState,Sixes:5, Run:41}})}}>View</button>
            </>
        )
    }
}
export default Updateclass