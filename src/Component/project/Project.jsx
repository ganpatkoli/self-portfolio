import React from "react";
import "./Project.css";
import Data from "./Sdata";
import Bounce from 'react-reveal/Bounce';
const Project = () => {
  return (
    <>
      <div className="container-fluid" id="project" >
        <div className="mt-5">
        <h1 className="text-center text-decoration-underline mt-5 " >
          Project
        </h1>
        </div>
        <div  className="containerr">
          {Data.map((x) => {

            return (
              <>
              <Bounce Left>

                <div  className="card mt-3">
                  <div className="content">
                    <div className="imgBx">
                      <img src={x.Image} alt="a" />
                    </div>
                    <div className="contentBx">
                      <h3 className="name">
                        {x.Name}
                        <br />
                        <span></span>
                      </h3>
                    </div>
                  </div>
                  <ul className="sci ">
                    <li className="github">
                      <a className="text-decoration-none github" href={x.Github_Link } rel='_blank'>github</a>
                    </li>
                    <li className="github">
                      <a className="text-decoration-none demo" href={x.Demo_Link} rel='_blank'>Demo</a>
                    </li>
                  </ul>
                </div>
              </Bounce>
              </>
            );
          })}
        </div>
      </div>

          </>
  );
};
export default Project;
