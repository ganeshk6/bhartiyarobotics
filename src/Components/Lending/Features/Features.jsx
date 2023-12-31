import React from "react";
import Style from "./Features.module.css";
import Image from "next/image";
import SensorImages from "../assets/images/sensor.jpg";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <>
      <div id="features" className={Style.Features}>
        <h1>Featured Content</h1>
        <div className={Style.featureCard}>
          <FeaturesCard href={SensorImages} btn="Ignition Kit" />
          <FeaturesCard href={SensorImages} btn="Explorer Kit" />
          <FeaturesCard href={SensorImages} btn="Innovator Kit" />
          {/* <FeaturesCard href={SensorImage} btn="Innovator Kit" />
          <FeaturesCard href={SensorImage} btn="Innovator Kit" />
          <FeaturesCard href={SensorImage} btn="Innovator Kit" />
          <FeaturesCard href={SensorImage} btn="Innovator Kit" /> */}
        </div>
        <div className={Style.featureContent}>
          <p>
            Explore the future with our IoT Kit – a creativity powerhouse!
            Packed with sensors, it sparks innovation and includes
            expert-guided, detailed videos for exciting projects. Whether you're
            a beginner or pro, this user-friendly kit is your gateway to
            hands-on learning. Elevate your tech skills and embark on a journey
            of discovery today!
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
