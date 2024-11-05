import {useState} from "react";

function MyForm() {

    const[input,setinput] = useState({phone:"+91", email:"@icanio.com", country:"India",about:"I am a student"});

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Submitted")
        console.log('Current State', input);
    }

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setinput((previosState) => {return {...previosState,[name]:value }})
    }

    return (
        <form onSubmit={handleSubmit}>
           <label>Enter Your Name : <input type="text" name="name" onChange={handleChange} required/> </label> <br></br><br></br>
           <label>Enter Your Ages : <input type="text" name="age"   onChange={handleChange}/>  </label> <br></br> <br></br>
           <label>Enter Your Email: <input type="text" name="email" onChange={handleChange} value={input.email}/> </label> <br></br> <br></br>
           <label>Enter Your Phone No: <input type="text" name="phone" onChange={handleChange} value={input.phone}/> </label> <br></br> <br></br>
           <label>Select Your Country: <select name="country" onChange={handleChange} value={input.country}> 
             <option value="">Select</option>
             <option value="Australia">Australia</option>
             <option value="Afganisthan">Afganisthan</option>
             <option value="England">England</option>
             <option value="India">India</option>
            </select> 
           </label> <br></br>
           <label>Enter about you:<textarea name="about" value={input.about}onChange={handleChange}/></label> <br></br> <br></br>
           <input type="submit"value="Submit" />
        </form>
    )
}
export default MyForm;