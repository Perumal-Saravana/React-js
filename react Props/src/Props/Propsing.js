import React from "react";
import Bike from "./Bike";
import Car from "./Car";

function Propsing(){
    
    const Value = {Model:"Apache", number:10}
    const Amount = {Rupees:500000}

    return(
        <>
        <Bike Data Value={Value}/>
        <Car Amount = {Amount}/>/
        </>
    )
}
export default Propsing;