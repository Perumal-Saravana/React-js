import Car from "./Car";
import Apple from "./Apple";

function Adelaide(){
    
    //props in function component
    // const carinfo = {brand:"Ford", color:"White"}
    const carinfo ={}

    //props in class component
    const Appleinfo = {color:"Green", type:"Gala"}

    return(
        <>
        <h1>Who live inside by Gaba</h1>
        {carinfo.brand !== undefined && carinfo.color !== undefined ?
        <Car carinfo = {carinfo}/> : null }
        <Apple Appleinfo = {Appleinfo}/>
        </>
    )
}
export default Adelaide;