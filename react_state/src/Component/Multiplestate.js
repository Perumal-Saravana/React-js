import { useState } from "react";

//Multiple state Hook
function Multiplestate(){
     
    const [color, setColor] = useState("Green")
    const [Brand, setBrand] = useState("Honda")
    const [Model, setModel] = useState("Activa 5G")
    const [Year, setYear] = useState("2020")

    return(
         <>
           <h1>Scooter</h1>
           <p>Color : {color}</p>
           <p>Brand : {Brand}</p>
           <p>Model : {Model}</p>
           <p>Year  : {Year}</p>
         </>
     )
}
export default Multiplestate;