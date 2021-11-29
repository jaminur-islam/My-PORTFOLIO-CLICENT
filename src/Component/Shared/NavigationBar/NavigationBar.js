import React from 'react';
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <div className='p-1' style={{backgroundColor:"#211A32"}}>
      <nav className="navbar navbar-expand-lg navbar-light container">
  <div className="container-fluid">
    <a className="navbar-brand fs-1" href="#">
      sagor 
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-container " id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a  aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a  href="#">Features</a>
        </li>
        <li className="nav-item">
          <a  href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a  href="#">Resume</a>
        </li>
        <li className="nav-item">
          <a  href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default NavigationBar;