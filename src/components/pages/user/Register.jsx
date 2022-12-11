import React from 'react';
import { useState } from 'react';
const Register = () => {
 const [data,setData]= useState(0)   
    const handleSubmit=()=>{
        setData (data+1) ;
        alert(data);

    };
    console.warn("_______________");
  return (
    <>
    
    <div>

<h1>{data}</h1>
<button onClick={handleSubmit}>Clickme</button>
    </div>
    
    </>
  )
}

export default Register
