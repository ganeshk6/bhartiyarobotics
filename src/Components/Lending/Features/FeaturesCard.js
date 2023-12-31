import React from "react";
import Style from "./Features.module.css";
import SensorImage from "../assets/images/sensor.jpg";
import Image from "next/image";

const FeaturesCard = ({ href, btn }) => {
  return (
    <div>
      <div className={Style.featureImage}>
        <div>
          <Image
            src={href}
            height={250}
            width={300}
            className={Style.image}
            alt="src"
          />
        </div>
        <div className={Style.featureButton}>
          <button type="button">{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
