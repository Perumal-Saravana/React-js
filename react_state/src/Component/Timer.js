import {useEffect,useState} from "react"

//use effect
function Timer(){ 

    const[count,setCount] = useState(0);

    useEffect (() => {
        console.log('Screen Rendered')
        checkcount()
        // setCount(1)
        // setTimeout(() =>{
        //     setCount((previousState) => {return previousState+1})
        // },1000)
    }) 

    function checkcount(){
        if(count > 10){
            setCount(1); 
        }
    }

    function updatecount(){
        setCount((previousState) => {return previousState+1})
    }

    return (
        <>
        <h1>I gave rendered {count} times</h1>
        <button onClick={updatecount}>Increase count</button>
        </>
    )
}
export default Timer;