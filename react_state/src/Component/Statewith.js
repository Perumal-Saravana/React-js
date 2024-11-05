import { useState } from "react";

function Statewith(){
  
  //State wiht object
    const [scooter , setscooter] = useState({ Color:"Red", Brand:"Honda", Model:"Activa 5G", Year:"2020"})

return(
    <>
          <h1>Scooter</h1>
          <p>Color : {scooter.Color}</p>
          <p>Brand : {scooter.Brand}</p>
          <p>Model : {scooter.Model}</p>
          <p>Year  : {scooter.Year}</p>
          <button onClick={update}>Update Latest</button>
    </>
  )  
}
export default Statewith;