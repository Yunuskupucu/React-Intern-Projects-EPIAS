import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="contact-div">
      <div className="contact-info-div">
        {" "}
        <div>
          <h4 className="contact-title">Get In Touch Contact</h4>
          <span className="line" />
        </div>
        <div className="contact-infos">
          <div className="contact-info">
            <FaPhone className="contact-item" />
            <p className="contact-text">Phone: +90 (216) 000 00 00</p>
          </div>
          <div className="contact-info">
            <IoIosMail className="contact-item" />
            <p className="contact-text">E-mail: example@gmail.com</p>
          </div>
          <div className="contact-info">
            <FaLocationDot className="contact-item" />
            <p className="contact-text">Location: Istanbul, Turkey</p>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          width="720"
          height="500"
          src="https://maps.google.com/maps?width=600&amp;height=500&amp;hl=en&amp;q=%C3%9Csk%C3%BCdar%20Meydan+(Company)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
