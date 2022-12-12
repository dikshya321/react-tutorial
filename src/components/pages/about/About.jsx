import React from 'react';
import CommonPages from "../commonPage/CommonPages";
import hello1 from "../../../images/hello1.webp";
import hello3 from "../../../images/hello3.jpg";
import hyy from "../../../images/hyy.webp";
import Carousel from 'react-bootstrap/Carousel';
const About = () => {
  return (
    <>
    <CommonPages title ="we wanted to do our STArtup" 
    description="we trust or hardwork."
    btnHome="Get Services"
    imgHome={hello1}/>

<Carousel>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block w-50 h-50 float-left"
          src={hello3} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block w-50 h-50 float-left"
          src={hello1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block w-50 h-50 float-left"
          src={hyy}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel><br/>
    </>
  )
}

export default About;
