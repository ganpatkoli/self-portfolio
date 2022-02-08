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
      <section id="home" >
        <div className="container-fluid">
          <div className="row  justify-content-center" >
            <div className="col-xl-6 col-lg-7 col-md-9  col-12 " id="HomeScreen_Content">
                <img
                  src={profile}
                  alt=""
                  className="img-fluid w-25"
                  id="profile_center"
                  />
             
                <h1
                  className="text-center p-2"
                  style={{ color: "crimson", fontWeight: "600" }}
                >
                
                  Ganpat  Koli
                </h1>

                <p className="text-center p-2">
                  Ganpat Koli 23 Old Year Introvert Guy From VastraNagri
                  Bhilwara , Who Self Thought Web Developer And Who Loved
                  Programing , Poetry And Travel Also
                </p>

<Type/>
            </div>
          </div>
        </div>
      </section>

   
      <i
          className="far fa-hand-point-up sticky_btn" style={{ display : visible ? 'inline' : 'none' }}
          onClick={scrollToTop}
        ></i>
   
    </>
  );
};

export default Home;
