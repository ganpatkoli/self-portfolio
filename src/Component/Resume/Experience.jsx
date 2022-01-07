import React from "react";
import "./R.css";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
const Experience = () => {
  return (
    <section className="resume-main-wrapper  container-fluid">
      <div id="resume" className="containe   d-flex justify-content-center">
        <div className="row ">
          <h3 className="text-center my-5">Resume</h3>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <Fade left>
              <div className="resume">
                <div className="my-5">
                  <h2 className="text-center"> Education</h2>
                </div>

                <div className="containe wrapper">
                  <div className="timeline-block">
                    <div className="marker"></div>

                    <Roll left>
                      <div className="timeline-content  hover">
                        <h3>Seeta Devi Collage</h3>
                        <h5>Bachelor of Computer Application</h5>
                        <h6>74.70%</h6>
                        <h6>2016 - 19</h6>
                      </div>
                    </Roll>
                  </div>
                </div>

                <div className="containe wrapper ">
                  <div className="timeline-block">
                    <div className="marker"></div>
                    <Roll left>
                      <div className="timeline-content hover">
                        <h3>RBSE </h3>
                        <h5>Senior Secondary</h5>
                        <h6>54.90%</h6>
                        <h6>2015 - 16</h6>
                      </div>
                    </Roll>
                  </div>
                </div>

                <div className="containe wrapper">
                  <div className="timeline-block">
                    <div className="marker"></div>
                    <Roll left>
                      <div className="timeline-content hover">
                        <h3>RBSE</h3>
                        <h5>High Secondary</h5>
                        <h6>58.80%</h6>
                        <h6>2014 - 15</h6>
                      </div>
                    </Roll>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          {/* RIGHT COLOMN */}

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6  ">
            <Fade right>
              <div className="resume  ">
                <div className=" my-5 ">
                  <h2 className="text-center">Learning</h2>
                </div>
                <div className="my-5">
                  <div className="containe wrapper ">
                    <div className="timeline-block ">
                      <div className="marker"></div>
                      <Roll right>
                        <div className="timeline-content hover ">
                          <h3>HTML</h3>
                          <h6>2021- present </h6>
                          <h5>Youtube / W3Schools </h5>
                        </div>
                      </Roll>
                    </div>
                  </div>
                  <div className="containe wrapper">
                    <div className="timeline-block">
                      <div className="marker"></div>
                      <Roll right>
                        <div className="timeline-content hover ">
                          <h3>CSS / BootStrap</h3>
                          <h6>2021- present </h6>
                          <h5>Youtube /Official Document </h5>
                        </div>
                      </Roll>
                    </div>
                  </div>

                  <div className="containe wrapper">
                    <div className="timeline-block">
                      <div className="marker"></div>
                      <Roll right>
                        <div className="timeline-content hover">
                          <h3>Javascript / React </h3>
                          <h6>2021 - Present</h6>
                          <h5>CodeWithHarry/Udemy</h5>
                        </div>
                      </Roll>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
