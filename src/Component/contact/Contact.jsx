import React from "react";
import "./Contact.css";
import Fade from 'react-reveal/Fade';
const Contact = () => {
  return  <>
      <div className="container-fluid " id="contact">
        <div className="row  my-5">
          <h1 className="col-12  text-center"> For Any Query and Suggetion </h1>
          <div  className="row justify-content-evenly">

            <div className=" col-xl-7   col-lg-6  col-md-6  col-sm-5 col-xs-12 mx-1 mt-5 " >

           <Fade left>
               <div id="margin_top"  >
                <div className="address d-flex my-1">
                  <i class="fas fa-map-marker-alt fontsize" style={{color:"#a77564"}}></i>
                  <p className="mx-4"> Panchmukhi Road New Dadabari, Bhilwara (Raj) 311001
                  </p>
                </div>
                <div className="contact d-flex  my-2">
                  <i class="fas fa-phone-volume fontsize " style={{ transform: "rotate(-32deg)" ,  color:"#a77564"}} ></i>
                  <p className="mx-4">(+91) 7725950766 , (+91) 6350353764</p>
                </div>
                <div className="mail d-flex my-1`">
                  <i class="far fa-envelope fontsize " style={{color:"#a77564"}}></i>
                  <p className="mx-4">Ganpatkoli143@gmail.com</p>
                </div>
              </div>
           </Fade>
            </div>
                <Fade right>
            <div data-aos="fade-left"  className="col-xxl-5 col-xl-5  col-md-4  col-lg-5   my-1   mt-5 contact_section">

              <div className="main ">
                <input
                  type="text"
                  className="width my-2 mt-4"
                  placeholder=" Name"
                  />
                <input
                  type="Email"
                  className="width my-2"
                  placeholder=" Email"
                  />
                <input
                  type="phone"
                  className="width my-2" 
                  placeholder=" Contact-No"
                  />
                <textarea
                  placeholder="Query Here.."
                  className="width my-3 "
                  id=""
                  cols="40"
                  rows="3"
                  ></textarea>
                <input
                  type="submit"
                  className="submit col-3"
                  />
              </div>
            </div>
                  </Fade>
          </div>
        </div>
        </div>
    </>
};

export default Contact;
