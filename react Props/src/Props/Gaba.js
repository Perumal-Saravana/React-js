import Car from "./Car";
import Apple from "./Apple";

function Gaba(){

    // const brand = "ford";
    // const color = "White";
    
    //props in function component
    const carinfo = {brand:"Ford", color:"White"}

    //props in class component
    const Appleinfo = {color:"Green", type:"Gala"}

    return(
        <>
        <h1>Who live inside by Gaba</h1>
        {/* <Car brand = {brand} color = {color}/> */}
        <Car carinfo = {carinfo}/>
        <Apple Appleinfo = {Appleinfo}/>
        </>
    )
}
export default Gaba;