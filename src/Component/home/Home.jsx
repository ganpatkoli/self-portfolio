import React, { useState } from "react";
import "./home.css";
import profile from "../images/profile.png";
import Type from "./Type";

const Home = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener('scroll', toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>

    <section id="homescreen">
    <div className="container_fluid b-3 " id="home">
          <div className="row" id="center_content">
            <div className="col-xxl-5 col-lg-7 col-md-9 col-9   justify-content-center">
              
              <div className="ms-5">
                <img
                  src={profile}
                  alt=""
                  className=" w-25"
                  id="profile_center"
                />
              </div>

              <div>
                <h1
                  className="text-center py-3"
                  style={{ color: "crimson", fontWeight: "600" }}
                >
                  Ganpat Kumar Koli
                </h1>
              </div>

              <h3 className="">
               </h3>
              <p className="text-center">
                Ganpat Koli 23 Old Year Introvert Guy From VastraNagri Bhilwara
                , Who Self Thought Web Developer And Who Loved Programing ,
                Poetry And Travel Also
              </p>
              <Type />
            </div>
          </div>
        </div>
        <i
          className="far fa-hand-point-up sticky_btn" style={{ display : visible ? 'inline' : 'none'}}
          onClick={scrollToTop}
        ></i>
      {/* </div> */}

    </section>
    </>
  );
};

export default Home;
