import React from "react";

function Car(props){

    // const {brand} = props;
    // const {color} = props;
    //function props
    const {carinfo} = props;
    const {brand,color} = carinfo;

    const text = `Hi Im a ${brand} ${color} Color car`;
    return(
        <h2>{text}</h2>
    )
}
export default Car;