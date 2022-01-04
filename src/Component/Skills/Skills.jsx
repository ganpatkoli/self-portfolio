import React from "react";
import Skillsbar from "./Skillsbar";
import "./Skills.css";
const Skills = () => {
  return (
    <>
      <div className="container-fluid mb-5 " id="skills">
        <div    className="row justify-content-space-between mt-2 p-4"
          id="skills_main"
        >
          <div
            className="col-xl-5 col-md-6 col-sm-12 Skill_left"
          >
            <h2
              className="text-center mt-5  text-decoration-underline"
              style={{ fontSize: "1.4em"}}
            >
              My creative skills & experiences.
            </h2>
            
            <p  data-aos="flip-left" className='mt-3 '  style={{ textAlign: 'center' , fontSize:'1.2em'}} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aperiam dolor iusto inventore eos aspernatur odit id, nam
              temporibus natus possimus placeat facere incidunt hic, totam
              beatae, eveniet molestiae obcaecati!
            </p>
          </div>
          <div className="col-xl-7 col-md-6 col-sm-12 ps-1  mt-1">
            <Skillsbar  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
