import React from "react";
import Skillsbar from "./Skillsbar";
import "./Skills.css";
import Fade from "react-reveal/Fade";
const Skills = () => {
  return (
    <>
      <div className="container-fluid  " id="skills">
        <div className="row" id="skills_main">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5  Skill_left">
            <Fade left>
              <h2
                className="text-center mt-3  text-decoration-underline"
                style={{ fontSize: "1.4em" }}
              >
                My creative skills & experiences.
              </h2>
            </Fade>
            <Fade left>
              <p
                className="mt-3 "
                style={{ textAlign: "center", fontSize: "1.2em" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aperiam dolor iusto inventore eos aspernatur odit id, nam
                temporibus natus possimus placeat facere incidunt hic, totam
                beatae, eveniet molestiae obcaecati!
              </p>
            </Fade>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-6  ps-1   mt-1">
            <Fade right>

            <Skillsbar />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
