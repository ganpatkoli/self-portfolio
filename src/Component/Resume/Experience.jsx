import React from "react";
import "./R.css";
const Experience = () => {
  return (
    <section  className="resume-main-wrapper container-fluid">
      <div id="resume" className="container">
        <div className="row d-flex justify-content-center">
        <h3 data-aos="zoom-in" className="text-center my-5">Resume</h3>
          <div data-aos="fade-right" className="col-lg-6 col-md-6 col-sm-12">
            <div   className="resume">
              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content  hover">
                    <h3>Seeta Devi Collage</h3>
                    <h5>Bachelor of Computer Application</h5>
                    <h6>74.70%</h6>
                    <h6>2016 - 19</h6>
                  </div>
                </div>
              </div>

              <div className="container wrapper ">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content hover">
                    <h3>RBSE </h3>
                    <h5>Senior Secondary</h5>
                    <h6>54.90%</h6>
                    <h6>2015 - 16</h6>
                  </div>
                </div>
              </div>

              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content hover">
                    <h3>RBSE</h3>
                    <h5>High Secondary</h5>
                    <h6>58.80%</h6>
                    <h6>2014 - 15</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT COLOMN */}



          <div data-aos="fade-left"   className="col-lg-6 col-md-6 col-sm-12  ">
            <div className="resume">
              <div className="my-5">

              </div>
              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content hover ">
                    <h3>HTML</h3>
                    <h6>2021- present </h6>
                    <h5>Youtube / W3Schools </h5>
                   
                  </div>
                </div>
              </div>
              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content hover ">
                    <h3>CSS / BootStrap</h3>
                    <h6>2021- present </h6>
                    <h5>Youtube /Official Document </h5>
                    </div>
                </div>
              </div>

              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content hover">
                    <h3>Javascript / React </h3>
                    <h6>2021 - Present</h6>
                    <h5>CodeWithHarry/Udemy</h5>
                   </div>
                </div>
              </div>


              
               </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
