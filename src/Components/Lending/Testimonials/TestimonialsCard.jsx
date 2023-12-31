import React from "react";
import style from './Testimonials.module.css'
import Image from "next/image";

const TestimonialsCard = ({ src, customerName, location, messages }) => {
  return (
    <>
      <div className={style.scroll}>
        <div className={style.scrollMenu}>
          <div>
            <Image src={src} className={style.scrollImage} />
          </div>
          <div className={style.customerName}>
            <p>{customerName}</p>
            <p>{location}</p>
          </div>
        </div>
        <div className={style.feedback}>
          <p>{messages}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
