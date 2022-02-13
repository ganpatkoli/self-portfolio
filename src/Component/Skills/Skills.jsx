import React from "react";
import Skillsbar from "./Skillsbar";
import "./Skills.css";
import Zoom from 'react-reveal/Zoom';
const Skills = () => {
  return (
    <>
      <div className="container-fluid  " id="skills">
        <div className="row" id="skills_main">
            <Zoom left>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5  Skill_left">
              <h2
                className="text-center mt-3  text-decoration-underline"
                style={{ fontSize: "1.4em" }}
              >
                My creative skills & experiences.
              </h2>
              <p
                className="mt-3 ms-3"
                style={{ textAlign: "center", fontSize: "1.2em" }}
              >
I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects. currently, I m search a platform where I can showcase my skills and knowledge
              </p>
          </div>
            </Zoom>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-6  ps-1   mt-1">
            <Zoom right>

            <Skillsbar />
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
