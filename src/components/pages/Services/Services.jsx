import React from "react";
import MyCard from "./MyCard";
import DataCard from "./CardData";
const Services = () => {
  return (
    
<>
<div>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div  className="col-10 mx-auto">
            <div className="row">
              {DataCard.map((curValue,index)=>{
                return<MyCard 
                key={curValue.id}
                title ={curValue.title}
                description={curValue.description}
                CardImg={curValue.CardImg}
                CardBtn={curValue.CardBtn}/>
              }

             
             )}

            </div>
         
  </div>
  </div>
  </div>
  </div>
  

</>
    
  );
};

export default Services;
