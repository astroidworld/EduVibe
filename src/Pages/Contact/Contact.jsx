import React from "react";
import Style from "./contact.module.css";
import {
  BsFillChatLeftQuoteFill,
  BsGlobeCentralSouthAsia,
} from "react-icons/bs";
import { FcCallback } from "react-icons/fc";
import ContactForm from "./ContactForm.jsx";

const Contact = () => {
  return (
    <div className={Style.mainContainer}>
      <div className={Style.divcontainer}>
        <div className={Style.leftside}>
          <div className={Style.sec1}>
            <div className="part1">
              <h1 className={Style.h1}>
                <BsFillChatLeftQuoteFill className={Style.h1} /> Chat on us
              </h1>
              <p className={Style.p}>
                Our friendly team is here to help.
                <br />
                info@EduVibe.com
              </p>
            </div>

            <div className="part2">
              <h1 className={Style.h1}>
                <BsGlobeCentralSouthAsia className={Style.h1} /> Our Address
              </h1>
              <p className={Style.p}>
                Come and say hello at our office HQ.
                <br />
                Sarat Chatterjee 1st Block 1st Cross, Shibpur, Howrah-711101
              </p>
            </div>

            <div className="part3">
              <h1 className={Style.h1}>
                <FcCallback className={Style.h1} /> Call us
              </h1>
              <p className={Style.p}>
                Mon - Fri From 8am to 5pm.
                <br />
                +91 758-695-2587
              </p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58940.98248160649!2d88.49280095!3d22.58615595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275350398a5b9%3A0x75e165b244323425!2sNewtown%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1695908779253!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className={Style.map}
          ></iframe>
        </div>

        <div className={Style.sec2}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
