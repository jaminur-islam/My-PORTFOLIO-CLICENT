import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div id="contact">
      <div className=" main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-container m-2">
                <p>
                  If you want to get good service then be sure to book our room
                  The way we serve you you won't find anywhere else, So come to
                  Chola without delay
                </p>
                <span>
                  Visit us to have a fun time, book a room from my website now
                </span>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="m-2 footer-container">
                <h5>CONTACT INFO</h5>
                <h6> Address </h6>
                <span>Tangail</span>
                <br />
                <span>Basail , 1920</span>
                <h6> Phone Number </h6>
                <span> 01789877577</span>
                <br />
                <span> 01690282979</span>
                <h6>Email Address</h6>
                <span>jaminurislam250@gmail.com</span>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="m-2 footer-container">
                <h5>PAGES</h5>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#home">Projects</a>
                </li>

                <li>
                  <a href="#home">Abount Me</a>
                </li>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="m-2 footer-container">
                <h5 className="mb-3">Follow Me</h5>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/jaminur-islam-022782217/">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Jaminur07260314">
                      {" "}
                      <i className="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/jaminur-islam-022782217/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jaminur-islam">
                      <i class="fab fa-github-square"></i>
                    </a>
                  </li>
                </ul>
                <h5 className="mb-4">MAILING LIST</h5>
                <span>
                  Sign up for our mailing ist to get updates and offers
                </span>
                <input
                  className="p-2 mt-3 rounded"
                  type="text"
                  placeholder="Your E-mail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center fot">
        <span>
          &copy; Copyright 2021 | BESTWEBSOFT | All Rights Reserved | Designed
          by jaminur islam
        </span>
      </div>
    </div>
  );
};

export default Footer;
