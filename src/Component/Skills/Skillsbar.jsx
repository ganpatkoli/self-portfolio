import React from "react";
import "./skillsbar.css";
const Skillsbar = () => {
  return (
    <>
    <div data-aos="flip-right" >

      <div className="skillBox">
         <div className="skillBar">
          <i className="fab fa-html5 fa-2x"></i>
          <span className="skillName"> HTML5 </span>
          <span className="float-end px-1 mb-2">80%</span>
          <div className="skillArea">
            <span className="skill-HTML"> </span>
          </div>
        </div>

        <div className="skillBar">
          <i class="fab fa-css3-alt fa-2x"></i>
          <span className="skillName"> CSS3 </span>
          <span className="float-end px-1 mb-2">65%</span>

          <div className="skillArea">
            <span className="skill-CSS"> </span>
          </div>
        </div>
      </div>

      <div className="skillBar">
        <i class="fab fa-js-square fa-2x"></i>
        <span className="skillName"> JAVASCRIPT </span>
        <span className="float-end px-1 mb-2">50%</span>

        <div className="skillArea">
          <span className="skill-A4"> </span>
        </div>
      </div>
      <div className="skillBar">
        <i class="fab fa-bootstrap fa-2x"></i>
        <span className="skillName"> BOOTSTRAP </span>
        <span className="float-end px-1 mb-2">70%</span>

        <div className="skillArea">
          <span className="skill-JS"> </span>
        </div>
      </div>

      <div className="skillBar">
        <i class="fab fa-react fa-2x"></i>
        <span className="skillName"> REACT </span>
        <span className="float-end px-1 mb-2">70%</span>

        <div className="skillArea">
          <span className="skill-NODEJS"> </span>
        </div>
      </div>

      <div className="skillBar">
        <i className="fab fa-git fa-2x"></i>
        <span className="skillName"> GIT & GITHUB </span>
        <span className="float-end px-1 mb-2">40%</span>

        <div className="skillArea">
          <span className="skill-GG"> </span>
        </div>
      </div>
    </div>
    </>
  );
};
export default Skillsbar;
