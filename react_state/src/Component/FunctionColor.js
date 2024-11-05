import { useState } from "react";

//Creating a state
//function State
function FunctionColor(){
    const [color,coloring] = useState('Red')

    return (
        <>
           <h1>My Favorite Color is {color}</h1>
           <button onClick={ () => {coloring('Orange')}}>Changing Color is Function State</button>
        </>
    )
}
export default FunctionColor;