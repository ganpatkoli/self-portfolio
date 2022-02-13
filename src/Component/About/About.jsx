import React from "react";
import "./About.css";
import about_profile from "../About/12-modified-min.png";
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';
import Flip from 'react-reveal/Flip';
const About = () => {
  return (
    <>
      <div className="container-fluid " id="about">
        <div className="row " id="top">
          {/* LEFT SIDE */}
            <div
              className="col-xl-4 col-lg-5 col-md-5 col-sm-5  "
              id="About_left_side"
            >
              <Jump left  >
              <img
                src={about_profile}
                className="img-fluid w-50 profile"
                alt="Profile"
              />
          </Jump>
              <Flip left >
              <div className="text-center col- my-3 ">
                <h4 className=" " style={{ letterSpacing: "1px" }}>
                  Ganpat Koli
                </h4>
                <h5 className="s-3" style={{ letterSpacing: "1px" }}>
                  Front End Developer
                </h5>
              </div>
              </Flip >
            </div>
          {/*  RIGHT SIDE  */}

          <div
            className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-11  "
            id="About_Para"
          >
            <Pulse right>
              <h2 className="text-center mt-4 " style={{ fontSize: "2.6em" }}>
                Who Am I.. ?
              </h2>
            </Pulse>
            <Pulse top right>
              <p
                className=" mt-2  "
                style={{
                  fontSize: "1.3em",
                  opacity: ".9",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                ganpat koli who love to design and code and Try To Create
                Something New always, when i done my Graduation , i have no idea
                what should i do as an Career, After two years, I discovered my passion for web technology.So I Decided To Learn Web Design And Development. I completed Html, CSS, Javascript (Modern Javascript), BootStrap, ReactJs, and also learned Nodejs.
                </p>
              <p className="col-12 fw-lighter" id="border">
                Life Like A Paradox When You Close Particuler Things <br />
                Then You Explore New Things :- <span>Ganpat Koli</span>
              </p>
            </Pulse>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
