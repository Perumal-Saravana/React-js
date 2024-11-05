import React from "react";

class Apple extends React.Component{
    render() {

        //props in component
        const {Appleinfo} = this.props;
        const {color,type} = Appleinfo;

        return (
            <h1>Hi this is {color} color {type} Apple</h1>
        )
    }
}
export default Apple;