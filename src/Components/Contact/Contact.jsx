import React, { useContext } from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/Theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <div className="section">
      <h2 className="section__title" data-aos="fade-right">
        Get in <span className="different">Touch</span>
      </h2>
      <div className="contactMain">
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/viraj-gupta-681073226/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/rkvirajgupta/"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href="mailto:rkvirajgupta@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          </a>
          <a href="tel:+919669222448" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
          </a>
        </div>
        <div className="mailNumber" data-aos="fade-right">
          <div>
            <span>
              <CgMail className="email" />
            </span>
            <span>
              <p>rkvirajgupta@gmail.com</p>
            </span>
          </div>
          <div className="iconsCont">
            <span>
              <BsFillTelephoneFill className="phone" />
            </span>
            <span>
              <p>+91 9669222448</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
