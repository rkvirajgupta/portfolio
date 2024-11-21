import React, { useContext } from "react";
import "./About.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ThemeContext } from "../../Context/Theme";
import profilePic from "../../assets/profile4.jpg";

export const About = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <div className="section" data-aos="fade-right">
      <h2 className="section__title">
        About <span className="different">Me</span>
      </h2>
      <div className={"about " + themename}>
        <div className="about_logocontainer">
          <img src={profilePic} alt="Images" />
        </div>
        <div className="about_datacontainer">
          <h4>
            Hi Everyone, My name is{" "}
            <span className="different">Viraj Gupta, </span> and I am from{" "}
            <span className="different"> Indore, Madhya-pradesh, India. </span>I
            have completed my post-graduation in{" "}
            <span className="different">M.Sc. (Information Technology) </span>
            from{" "}
            <span className="different">MPBOU University, Bhopal (M.P.)</span>.
            I am currently working in{" "}
            <span className="different">Q3 Technologies</span> as a Software
            Developer.
          </h4>
          <h4>Terms That can describe me apart form Coding :</h4>
          <h4 className="different">
            <span className="icons">
              <ExitToAppIcon />
            </span>
            Chess Enthusiast{" "}
          </h4>
          <h4 className="different">
            <span className="icons">
              <ExitToAppIcon />
            </span>
            Creative Thinking{" "}
          </h4>
          <h4 className="different">
            <span className="icons">
              <ExitToAppIcon />
            </span>
            Travelling{" "}
          </h4>
          <h4 className="different">
            <span className="icons">
              <ExitToAppIcon />
            </span>
            Exploring New Places{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};
