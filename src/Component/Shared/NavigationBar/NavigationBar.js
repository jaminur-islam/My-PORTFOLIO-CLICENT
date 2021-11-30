import React, { useState } from "react";
import "./NavigationBar.css";
import sun from "../../../img/sun.png";
import moon from "../../../img/moon.png";

const NavigationBar = ({ setDark, dark }) => {
  const [active, setActive] = useState("home");
  return (
    <div className="p-1">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <div className="container-fluid">
          <a
            className={`logoName fs-3 fw-bold ${dark ? "" : "shadow"}`}
            href="#"
          >
            JAMINUR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar-container "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  onClick={() => setActive("home")}
                  className={active == "home" ? "text-black" : ""}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setActive("fe")}
                  className={active == "fe" ? "text-black" : ""}
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setActive("po")}
                  className={active == "po" ? "text-black" : ""}
                  href="#"
                >
                  Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a
                  onClick={() => setActive("c")}
                  className={active == "c" ? "text-black" : ""}
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <p className="ms-3">
                  <img
                    onClick={() => setDark(!dark)}
                    src={dark ? sun : moon}
                    width="30"
                    alt=""
                  />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
