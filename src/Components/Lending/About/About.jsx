import React from 'react'
import Style from './About.module.css'

const About = () => {
  return (
    <div id='about' className={Style.About}>
        <div className={Style.aboutContent}>
            <h1>About Us</h1>
            <p>Step into the Bhartiya Robotics family – your go-to haven for cutting-edge IoT kits and sensors! Here at Bhartiya Robotics, we're more than just a store; we're your partners in shaping a tech-savvy future. Our mission is to empower individuals of all skill levels to dive into the exciting world of IoT.</p>
            <p>Rooted in a love for innovation and hands-on learning, our comprehensive IoT kits come packed with an array of sensors. But our commitment goes beyond mere products – we're here to accompany you on a journey of exploration and discovery.</p>
            <p>What makes us stand out is our dedication to education. Our carefully crafted kits are paired with user-friendly tutorials and step-by-step guides. Whether you're just starting out or a seasoned enthusiast, we're here to help you unlock the full potential of your IoT projects</p>
            <p>Join the Bhartiya Robotics community and elevate your tech journey with us. Together, let's build the future – one IoT project at a time!</p>
            <div className={Style.aboutButtonNoMore}>
                <button type="button">Know More</button>
            </div>
        </div>
        <div className={Style.aboutVideo}>
            <video src="">Video</video>
        </div>
    </div>
  )
}

export default About