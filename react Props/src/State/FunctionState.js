import { useState } from "react";
import React from "react";

function FunctionState(){
const[Trophy, setTrophy] = useState(5)
return (
    <>
    <h1>Australia has win {Trophy} Trophy</h1>
    <button onClick={()=> {setTrophy(6)}}>Click me</button>
    </>
   )
}
export default FunctionState;