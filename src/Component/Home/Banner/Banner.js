import React from "react";
import "./Banner.css";
import hedimg from "../../../img/bigpic.png";
import Typewriter from "typewriter-effect";

const Banner = ({ dark }) => {
  const handleResume = () => {
    alert("Downloading resume...");
  };
  return (
    <div className="banner-container mx-auto">
      <div
        className={`container  mt-3 banner-container2 py-4 ${
          !dark ? "shadow" : ""
        }`}
      >
        <div className="banner-content">
          <div className="banner-img">
            <img src={hedimg} alt="" />
          </div>
          <div className="banner-text-part">
            <h2 className="fs-1 hee"> this is my poricoy isSDFD very nice</h2>
            <span
              className={
                dark ? " text-white fs-1 fw-bold " : "text-dark fs-1 fw-bold"
              }
            >
              I'M JAMINUR ISLAM
            </span>
            <h1 className="type fs-3">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Mern Stack web developer")
                    /*   .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
 */
                    .start();
                }}
              />
            </h1>
            <div>
              <h5 className={dark ? "text-white fs-4" : "text-black fs-4"}>
                Find with me
              </h5>
              <ul className="ml-auto">
                <li>
                  <a href="https://www.linkedin.com/in/jaminur-islam-022782217/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/mdsagor.sagur.3/">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Jaminur07260314">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
              </ul>

              <a
                onClick={handleResume}
                className="btn btn-primary ms-2"
                href="https://drive.google.com/u/0/uc?id=1suDRsRor1zOvJB0IQJXJ1Ja688_yxuCc&export=download"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
