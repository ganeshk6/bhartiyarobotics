import React from "react";
import Styles from "./HomeLending.module.css";
import homeImage from "../assets/images/banner.png";
import Image from "next/image";

const HomeLending = () => {
  return (
    <>
      <div id="home" className={Styles.homeBanner}>
          {/* <div className={Styles.homeImage}>
            <Image src={homeImage} layout="fill" />
          </div> */}
          <div className={Styles.homeContent}>
            <p>Embark on a journey of discovery with</p>
            <h1>
              Architects of Automation, Masters of Innovation: Bhartiya
              Robotics.
            </h1>
            <p>
              "Explore the world of robotics, fostering hands-on engineering
              experience to ignite creativity and passion for innovation among
              aspiring engineers in the Robotic Revolution."
            </p>
          </div>
      </div>
    </>
  );
};

export default HomeLending;
