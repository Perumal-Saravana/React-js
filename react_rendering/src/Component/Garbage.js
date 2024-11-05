import Car from "./Car"
import Apple from "./Apple"

function Garbage(){
      const opendoor = false;
  const carinfo = {brand:"Ferrari",color:"White"}
  // const carinfo = {}
  const Appleinfo = {color:"Green", type:"Gala"}
  const Carlist = [
              {brand:"BMW" , color:"Green"},
              {brand:"Ford" , color:"Red"},
              {brand:"Tesla", color:"White"}
             ] 
          const numberlist = [1,2,3,4,5]

  const showcarinfo = carinfo.brand !== undefined && carinfo.color !== undefined;

   return(
      <>
         <h1>Child class of car component</h1>
              {showcarinfo && <Car carinfo = {carinfo}/> }
              <Apple Appleinfo = {Appleinfo}/>
      {opendoor?<h2>Door is open</h2>:<h2>Door is closed</h2>}

           <ul>
                 {Carlist.map((carinfo) => <li key={carinfo.color}><Car carinfo = {carinfo}/></li> )} 
           </ul> 
           <ul>
                  {numberlist.map((e,index) => <p key={index}>{e}</p>)}
           </ul>
      </>
    );
  }
  export default Garbage;