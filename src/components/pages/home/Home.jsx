import React from 'react'
import {useState} from 'react';

const Home = () => {//controlled component
  const[Value,setValue]=useState("")
  return (
    <>
    <div className="myHome">
      <input type="text"placeholder="enter your email" 
      onChange={(e)=> setValue(e.target.value)}/>
      <br />
      <h1>Value:{Value}</h1>
    </div>
    </>
  );
};


// const Counter = ()=>{
//  const[count,setCount]=useState(0);
//   return(
//     <>
//    <div>
//    <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)}>Click Me</button>
//    </div>
    
//     </>
//   );
// };

// const RedHOC=(props)=>{
//   return(
//     <>
//     <div>

// <h1 style ={{backgroundColor:"red",width:"100px"}}>Red<props.cmp/></h1>

//     </div>
    
    
//     </>
//   )
// }

// const GreenHOC=(props)=>{
//   return(
//     <>
//     <div>

// <h1 style ={{backgroundColor:"green",width:"100px"}}>Green<props.cmp/></h1>

//     </div>
    
    
//     </>
//   );
// };

// const BlueHOC=(props)=>{
//   return(
//     <>
//     <div>

// <h1 style ={{backgroundColor:"blue",width:"100px"}}>Blue<props.cmp/></h1>

//     </div>
    
    
//     </>
//   )
// }



export default Home;
