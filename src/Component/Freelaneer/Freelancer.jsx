import React from "react";
import "./Freenacer.css";
import resume from "./CV_2021-11-08-035917.pdf"
const Freelacer = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-11 " id="background">
            <div className="text-center py-5" style={{  backgroundColor:'transparent' }}>
                <h2 style={{ color: "white", backgroundColor:'transparent' }}>
                  I Am Available For Freelancer Projects.
                </h2>
                  
                <p className="my-4" style={{ background:'transparent' }}>
                  Obviously I'm a Web Designer. Experienced with all stages of
                  the development cycle for dynamic web projects.
                </p>
              <div className="btn mt-3">
                <a href="https://linkedin.com/in/ganpatkoli" target='_blanck'  className="hire_btn">Hire-Me </a>
              </div>
              <div className="btn mt-3">
                <a href={resume} target='_blanck'  className="hire_btn">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freelacer;
