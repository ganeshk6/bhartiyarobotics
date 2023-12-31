import React from "react";
import Style from "./Contact.module.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className={Style.contact}>
        <div className={Style.aboutContent}>
          <h3>Contact Bhartiya Robotics</h3>
          <p>
          Interested in learning about the exciting world of robotics and technology? Fill out the form below to get in touch with us at Bhartiya Robotics
          </p>
          <p>
          Our dedicated team of experts are here to answer any questions you may have and help you on your journey towards a future in the field of education and robotics.
          </p>
          <p>
          Whether you are a student, parent, or educator, we welcome you to join our community and be a part of the innovative and dynamic world of Bhartiya Robotics.
          </p>
          <p>
          Don't miss out on the opportunity to expand your knowledge and skills in the ever-evolving field of technology. Contact us today!
          </p>
          <p>We will be happy to assist you.</p>
        </div>
        <div className={Style.form}>
          <form action="" className={Style.contactForm}>
            <div className={Style.nameField}>
                <div className={Style.field}>
                    <p>Name</p>
                    <input className={Style.inputField} type="text" placeholder="Enter Your Name..." />
                </div>
                <div>
                    <p>Email</p>
                    <input className={Style.inputField} type="email" placeholder="Enter Your Email..." />
                </div>
            </div>
            <div>
                <p>Message</p>
                <textarea className={Style.textareaInput} placeholder="Enter Your Message..." name="Message" id=""></textarea>
            </div>
            <div className={Style.submitButton} >
                <button type="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
