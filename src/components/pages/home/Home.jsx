import dikshaa from "../../../images/dikshaa.jpg";

import React from 'react';
import CommonPages from "../commonPage/CommonPages";
import { DealData } from "../../constants/Data";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <>
    <CommonPages title ="we are here for some services." 
    description="Welcome to the site"
    btnHome="Get Services"
    imgHome={dikshaa} link="/services"/>
    <div className="my-0">
      <h2 className="text-center">Best Deal Of The Day</h2>

    </div>
    <div className="container-fluid mb-5">
        <div className="row">
          <div  className="col-10 mx-auto">
            <div className="row">
              {DealData.map((curValue)=>{
                return(<HomeCard
                key={curValue.id}
                 title={curValue.title}
                 url={curValue.url}      />
              
              ); })}
            </div>
    

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



