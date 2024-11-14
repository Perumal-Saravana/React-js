import React from "react";

//Function Props
function Bike(props){
    const {Value} = props;
    const {number, Model} = Value;
    const text = `No of Bike ${number} will Sales Today ${Model} Vehicle`;
    return(
        <h2>{text}</h2>
    )
}
export default Bike;