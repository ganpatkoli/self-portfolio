import React from "react";
import "./Freenacer.css";
import resume from "./CV_2021-11-08-035917.pdf"
import Bounce from 'react-reveal/Bounce';
const Freelacer = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-11 " id="background">
           <Bounce>

            <div className="text-center py-5" style={{  backgroundColor:'transparent' }}>
                <h2 style={{ color: "", backgroundColor:'transparent' }}>
                  I Am Available For Freelancer Projects.
                </h2>
                  
                <p className="my-3" style={{ background:'transparent' }}>
                  Obviously I'm a Web Designer. Experienced with all stages of
                  the development cycle for dynamic web projects.
                </p>
              <div className="btn mt-1">
                <a href="https://linkedin.com/in/ganpatkoli" target='_blanck'  className="hire_btn">Hire-Me </a>
              </div>
              <div className="btn mt-1">
           
                <a href={resume} target='_blanck'  className="hire_btn">Resume</a>
              </div>
            </div>
           </Bounce>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freelacer;
