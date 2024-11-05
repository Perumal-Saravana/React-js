import React from 'react';
import { useNavigate } from 'react-router-dom';

//Navigate programmatically
function Login() {
   const navigate = useNavigate();

    function onSubmit(){
          navigate('/Contactus');
    }

   return(
     <>
       <h1>Login page</h1>
       <button onClick={onSubmit}>Login</button>
     </> )
  }
export default Login;