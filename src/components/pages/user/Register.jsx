import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import Login from './Login';
const Register = () => {
//  const [data,setData]= useState(0)   
//     const handleSubmit=()=>{
//         setData (data+1) ;
//         alert(data);

//     };
//     console.warn("_______________");
//   return (
//     <>
    
//     <div>

// <h1>{data}</h1>
// <button onClick={handleSubmit}>Clickme</button>
//     </div>

const [count,setCount]=useState(0);
const[data,setData]=useState(0);
// useEffect(()=>{
//   alert(`count number is:${count}`)
// },[count,data]);
    return(
<>
 <div>
  <h3>Count:{count}</h3><br/>
  <h3>Data:{data}</h3>
  <Login count={count}data={data}/>
  <button onClick={()=>setCount(count+1)}>Update Count</button>
  <button onClick={()=>setData(data+1)}>Update Data</button>
 </div>

</>
    )

    
  
}

export default Register
