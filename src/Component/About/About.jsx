import React from "react";
import "./About.css";
import about_profile from "../images/profile.png";
// import Skills from "../Skills/Skills";


const About = () => {
  return (
    <>
      <div className="container-fluid " id="about">
        <div className="row " id="top">
          <div class="col-9  col-sm-12 text-center ms-auto mt-1" id="About_heading">
            <h2 className="text-center mt-5 " style={{ fontSize: "2.6em" }}>
              Who Am I.. ?
            </h2>
          </div>

          <div className="row  justify-content-space-between   mt-2" id="About_top">
         

            <div  data-aos-duration="1000"  className=" col-5 col-xl-5 col-lg-5 col-md-5 col-sm-6  "
              id="img_width"
              >
              <img data-aos="fade-right"
                src={about_profile}
                className="img-fluid  profile"
                alt="Profile"
                style={{
                }}
                />
              <div className="text-center col- my-3 ">
                <h4 data-aos="fade-right"  data-aos-duration="1000"className=" " style={{ letterSpacing: '1px'}}>Ganpat Koli</h4>
                <h5 data-aos="fade-right" data-aos-duration="1000" className="s-3" style={{ letterSpacing: '1px'}}>Front End Developer</h5>
              </div>
                </div>
            <div data-aos="fade-left" className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 " id="About_Para">
              <p style={{ fontSize: "1.3em", opacity: ".9" }}>
                Hello Guys😎 I Am "Ganpat Kumar Koli" I Like To Play With Code
                And Designing Also I Complete My Greduation Before 2 Years, But
                I Dont Know What I Do As An Carriar, After 2 Years I Found Of My
                Intrest Web Technology.. So I Desided To Learn Web Design And
                Development, I Complete Html, Css, Javascript(Mordern
                Javascript),BootStrap ,ReactJs, Also Learn Nodejs..
              </p>

              <p className="col-12" id="border">
                Life Like A Paradox When You Close Particuler Things <br />
                Then You Explore New Things :- <span>Ganpat Koli</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
