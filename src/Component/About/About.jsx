import React from "react";
import "./About.css";
import about_profile from "../images/profile.png";
// import Skills from "../Skills/Skills";
import Flip from 'react-reveal/Flip';

import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <>
      <div className="container-fluid " id="about">
        <div className="row " id="top">
          {/* LEFT SIDE */}
<Flip left>


          <div
            className="col-xl-4 col-lg-5 col-md-5 col-sm-5  "
            id="About_left_side"
            >
            <img
              src={about_profile}
              className="img-fluid w-50 profile"
              alt="Profile"
              />
            <div className="text-center col- my-3 ">
              <h4 className=" " style={{ letterSpacing: "1px" }}>
                Ganpat Koli
              </h4>
              <h5 className="s-3" style={{ letterSpacing: "1px" }}>
                Front End Developer
              </h5>
            </div>
          </div>

              </Flip>
          {/*  RIGHT SIDE  */}

          <div
            className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-11  "
            id="About_Para"
          >
  <Fade right>
            <h2 className="text-center mt-4 " style={{ fontSize: "2.6em" }}>
              Who Am I.. ?
            </h2>
</Fade>
  <Fade right>

            <p className=" mt-2  " style={{ fontSize: "1.3em", opacity: ".9" , textAlign: "center" }}>
              Hello Guys😎 I Am "Ganpat Kumar Koli" I Like To Play With Code And
              Designing Also I Complete My Greduation Before 2 Years, But I Dont
              Know What I Do As An Carriar, After 2 Years I Found Of My Intrest
              Web Technology.. So I Desided To Learn Web Design And Development,
              I Complete Html, Css, Javascript(Mordern Javascript),BootStrap
              ,ReactJs, Also Learn Nodejs..
            </p>

  </Fade>
  <Fade right>
            <p className="col-12" id="border">
              Life Like A Paradox When You Close Particuler Things <br />
              Then You Explore New Things :- <span>Ganpat Koli</span>
            </p>
  </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
