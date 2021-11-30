import React from "react";
import "./About.css";
import myimg from "../../../img/main-11.jpeg";

const About = ({ dark }) => {
  return (
    <div
      className={dark ? "about  text-white" : "about  text-dark"}
      style={{ margin: "80px 0" }}
    >
      <div className="container py-4">
        <div className="text-center">
          <h2> About me </h2>
          <hr className="mx-auto" />
        </div>
        <div className="about-container">
          <div>
            <div className="mx-auto">
              <h1 className="fs-5  "> Some information for me : </h1>
              <p className="w-75">
                I am an all round web developer. I am a junior programmer with
                good knowledge of front-end and backend techniques. I like
                structure and discipline. I like to spend time fixing little
                details and optimizing web apps. Also, I like working in a team.
                I am very much interested in learning something new. The dream
                is to one day become a very big developer.
              </p>
              <div className="d-flex"></div>
            </div>
          </div>

          <div className=" py-2 img-container">
            <img width="400" src={myimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
