import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import testimonialsImage from "../assets/images/banner.png";
import Image from "next/image";
import style from "./Testimonials.module.css";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div id="testimonials" className={style.textimonials}>
      <div>
        <h1>Customers</h1>
      </div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={true}
        stopOnHover={true}
        autoFocus={true}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        dots={true}
      >
        <TestimonialsCard
          src={testimonialsImage}
          customerName="Ganesh kumar"
          location="INDIA"
          messages="Exceptional Robotics Solutions! Bhartiya Robotics has truly transformed our manufacturing processes. The precision and efficiency of their robotic systems have significantly increased our production output. The team at Bhartiya Robotics demonstrated unparalleled expertise, ensuring seamless integration and providing excellent support throughout the process. Highly recommended!"
        />
        <TestimonialsCard
          src={testimonialsImage}
          customerName="Ganesh kumar"
          location="INDIA"
          messages="Exceptional Robotics Solutions! Bhartiya Robotics has truly transformed our manufacturing processes. The precision and efficiency of their robotic systems have significantly increased our production output. The team at Bhartiya Robotics demonstrated unparalleled expertise, ensuring seamless integration and providing excellent support throughout the process. Highly recommended!"
        />
        <TestimonialsCard
          src={testimonialsImage}
          customerName="Ganesh kumar"
          location="INDIA"
          messages="Exceptional Robotics Solutions! Bhartiya Robotics has truly transformed our manufacturing processes. The precision and efficiency of their robotic systems have significantly increased our production output. The team at Bhartiya Robotics demonstrated unparalleled expertise, ensuring seamless integration and providing excellent support throughout the process. Highly recommended!"
        />
        {/* <div>
          <Image src={testimonialsImage} height={500} width={500} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image src={testimonialsImage} height={500} width={500} />
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel>
    </div>
  );
};
// ReactDOM.render(<Testimonials />, document.querySelector('.demo-carousel'));

export default Testimonials;
