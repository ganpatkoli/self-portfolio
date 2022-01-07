import React from "react";
import "./Social.css";
import Wobble from 'react-reveal/Wobble';
import Bounce from 'react-reveal/Bounce';
const Social = () => {
  return (
    <>
      <div className="container-fluid bottom-0" id="footer">
          <div className="row justify-content-center ">
            <div  className=" col-xl-7 col-md-7 col-lg-7 col-sm-7 col-12   text-center pt-4">
<Bounce>

              <p  className=" text-center" id="social_text">
                FIND ME ON
              </p>
</Bounce>
              <h4  className="text-center">Feel Free To Connect With Me</h4>
            </div>

            <div  className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-center p-2">
              <a  href="https://linkedin.com/in/ganpatkoli">
            <Wobble>
                <i  className="fab fa-linkedin-in fa-lg me-4 hover_icon"></i>
                </Wobble>
              </a>
              <a   href="https://github.com/ganpat1">
            <Wobble>
                <i className="fab fa-github fa-lg me-4 hover_icon"></i>
                </Wobble>
              </a>
              <a  href="https://www.facebook.com/Gannu980515">
            <Wobble>
                <i className="fab fa-facebook-square fa-lg me-4 hover_icon"></i>
                </Wobble>
              </a>
              <a  href="https://www.instagram.com/ganpat__koli/">
            <Wobble>
                <i className="fab fa-instagram fa-lg me-4 hover_icon"></i>
                </Wobble>
              </a>
            <Wobble>
              <i  className="fab fa-whatsapp fa-lg me-4 hover_icon"></i>
                </Wobble>
            </div>
            <div className="row  position-relative mt-4  ">
              <div className="col-12 text-center  my-2">
                Crafted By 
                <a
                  className="text-decoration-none mx-2   crafted "
                  href="https://www.instagram.com/ganpat__koli/"
                >
                  Ganpat-Koli 
                </a>
              </div>

            </div>
          </div>
        </div>

    </>
  );
};

export default Social;
