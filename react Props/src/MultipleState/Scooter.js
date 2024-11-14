import { useState } from "react";

function Scooter() {
    const [scooter, setscooter] = useState({ Color: "Blue", Brand: "Honda", Model: "Activa 6G", Year: "2022"});

    function updateColor() {
        setscooter(previosState => {
            return{...previosState, Color:"Red", Brand:"Bajaj"}
        });
    }
    
    return (
        <>
            <h1>Scooter</h1> 
            <p>Color: {scooter.Color}</p>
            <p>Brand: {scooter.Brand}</p>
            <p>Model: {scooter.Model}</p>
            <p>Year: {scooter.Year}</p>
            <button onClick={updateColor}>Change Scooter Color</button>
        </>
    );
}
export default Scooter;