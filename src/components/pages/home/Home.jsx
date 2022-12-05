
import React from 'react';

import Button from 'react-bootstrap/esm/Button';
import dikshaa from "../../../images/dikshaa.jpg";

const Home = () => {
  return (
    <>
          <div class="container">
  <div class="row">
    <div class="col">
      <h1 style={{marginTop:"20%"}}>We started <span style={{color:"green"}}>our Business with</span></h1>
      <h1 style={{color:"red"}}>PD ENGINEERING</h1>
      <h2>We are a team of talented developers for making a websites</h2>
      <Button variant="outline-primary">Get-Started</Button>{' '}
    </div>
    <div class="col">
    <img style={{width:"100%",height:"70%"}} src={dikshaa}/>
    </div>
  </div>
</div>

    </>
  )
}

export default Home;

 

//const Counter = ()=>{
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



