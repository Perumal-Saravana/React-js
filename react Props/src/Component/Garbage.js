import ClassComp from "./FunComp";
import FuncComp from "./ClassComp";

function Garbage() {
    return(
        <>
        {/* we use child class of component then we use div open and close */}
        <h1>Child class of Car and App</h1>
        <FuncComp/>
        <ClassComp/>
        </>
    )
}
export default Garbage;