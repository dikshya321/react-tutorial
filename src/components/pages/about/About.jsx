import React from 'react';
import CommonPages from "../commonPage/CommonPages";
import moon from "../../../images/moon.webp";

const About = () => {
  return (
    <>
    <CommonPages title ="we wanted to do our STArtup" 
    description="we trust or hardwork."
    btnHome="Get Services"
    imgHome={moon}/>
    </>
  )
}

export default About;
