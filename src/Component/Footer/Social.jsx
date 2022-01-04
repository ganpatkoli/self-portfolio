import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <>
      <div className="container-fluid bottom-0" id="footer">
          <div className="row justify-content-center ">
            <div  className="col-7  text-center pt-4">
              <p data-aos="fade-right" className=" text-center" id="social_text">
                FIND ME ON
              </p>
              <h4 data-aos="fade-left" className="text-center">Feel Free To Connect With Me</h4>
            </div>
            <div  className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-center p-2">
              <a  href="https://linkedin.com/in/ganpatkoli">
                <i className="fab fa-linkedin-in fa-lg me-4 hover_icon"></i>
              </a>
              <a  href="https://github.com/ganpat1">
                <i className="fab fa-github fa-lg me-4 hover_icon"></i>
              </a>
              <a  href="https://www.facebook.com/Gannu980515">
                <i className="fab fa-facebook-square fa-lg me-4 hover_icon"></i>
              </a>
              <a  href="https://www.instagram.com/ganpat__koli/">
                <i className="fab fa-instagram fa-lg me-4 hover_icon"></i>
              </a>
              <i  className="fab fa-whatsapp fa-lg me-4 hover_icon"></i>
            </div>
            <div className="row  position-relative mt-4  ">
              <div className="col-12 text-center  my-2">
                Crafted By :-
                <a
                  className="text-decoration-none mx-2  crafted "
                  href="https://www.instagram.com/ganpat__koli/"
                >
                  Ganpat-Koli 💝
                </a>
              </div>

            </div>
          </div>
        </div>

    </>
  );
};

export default Social;
