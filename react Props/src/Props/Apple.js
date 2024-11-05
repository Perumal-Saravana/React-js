import React from "react";

class Apple extends React.Component{
    render(){
        //class props
        const {Appleinfo} = this.props;
        const {color,type} = Appleinfo;
        return(
            <h2>Hi i am {color} {type} Apple</h2>
        )
    }
}
export default Apple;