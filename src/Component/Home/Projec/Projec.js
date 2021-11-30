import React from "react";
import "../Projects/Project.css";

const Projec = ({ project }) => {
  const { name, description, img, technology, live, git } = project || {};
  return (
    <div className="col-lg-4 my-3">
      <div className="project-container">
        <img src={img} alt="" />
        <p>{description.slice(0, 200)}</p>
        <p>Has been used {technology}</p>

        <div className="btn-container">
          <a href={live}> Go Website</a>
          <a href={git}> Go Github</a>
        </div>
      </div>
    </div>
  );
};

export default Projec;
