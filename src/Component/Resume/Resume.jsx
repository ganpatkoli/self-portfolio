import React from "react";
import "./Resume.css";
import resume from "./CV_2021-11-08-035917.pdf";

const Resume = () => {
  return (
    <>
      <div className="container-fluid border-3" id="resume">
        <div className="main ">
          <div>
            <h1
              className=" col-lg-12 mt-5 text-center  text-decoration-underline"
              style={{}}
              id="resume_top"
            >
              Resume
            </h1>
          </div>
          <div className="row mt-1   justify-content-evenly">
            <div className="text-center mt-3 ">
              <a className="btn btn-primary" href={resume} rel="_blank">
                Get-Resume
              </a>
            </div>
            <div className="col-4  " id="margin">
              <div id="list-example" className="list-group  text-center ">
                <a
                  className="list-group-item  list-group-item-action my-2 rounded-pill"
                  href="#list-item-1"
                >
                  Education
                </a>
                <a
                  className="list-group-item list-group-item-action  rounded-pill my-2"
                  href="#list-item-2"
                >
                  Skills
                </a>
                <a
                  className="list-group-item list-group-item-action rounded-pill my-2"
                  href="#list-item-3"
                >
                  Tools I Use
                </a>
                <a
                  className="list-group-item list-group-item-action rounded-pill"
                  href="#list-item-4"
                >
                  Project
                </a>
              </div>
            </div>

            <div className="col-7 margin_top">
              <div
                data-bs-spy="scroll"
                data-bs-target="#list-example"
                data-bs-offset="0"
                className="scrollspy-example"
                tabIndex="0"
                style={{
                  height: "350px",
                  overflowY: "scroll",
                  borderRadius: "15px",
                  padding: "20px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <h2
                  id="list-item-1 "
                  className="text-center my-5 text-decoration-underline "
                >
                  Education
                </h2>

                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th scope="col">--</th>
                      <th scope="col">School/University</th>
                      <th scope="col">Year Of Passing</th>
                      <th scope="col">Persentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                   
                        BCA(Bachelor of Computer Application)
                      </th>
                      <td>Maharshi Dayanand Saraswati University (Ajmer)</td>
                      <td>2019</td>
                      <td>72.50</td>
                    </tr>
                    <tr>
                      <th scope="row">Higher Secondary Education</th>
                      <td>Rajasthan Board Of Secondary Education</td>
                      <td>2016</td>
                      <td>54.69</td>
                    </tr>
                    <tr>
                      <th scope="row">Secondary Education</th>
                      <td>Rajasthan Board Of Secondary Education</td>
                      <td>2014</td>
                      <td>58.50</td>
                    </tr>
                  </tbody>
                </table>

                <h2
                  id="list-item-2"
                  className="my-5 text-center text-decoration-underline "
                >
                  Skills
                </h2>

                <ul
                  className="list-group  text-center d-inline-block "
                  style={{ background: "transparent" }}
                >
                  <li className="list-group-item ">HTML</li>
                  <li className="list-group-item">CSS</li>
                  <li className="list-group-item">BootStrap</li>
                  <li className="list-group-item">JavaScript</li>
                  <li className="list-group-item">ReactJS</li>
                </ul>

                <h2
                  id="list-item-3"
                  className="my-5 text-center  text-decoration-underline "
                >
                  Tools I Use
                </h2>

                <ul className="list-group text-center  d-inline-block border-0"   style={{ background: "transparent" }}
               >
                  <li className="list-group-item">Visual Studio Code Editor</li>
                  <li className="list-group-item">Git</li>
                  <li className="list-group-item">GitHub</li>
                  <li className="list-group-item">PostMan</li>
                  <li className="list-group-item">FireBase</li>
                </ul>

                <h2
                  id="list-item-4"
                  className="mt-5 text-center text-decoration-underline "
                >
                  Projects
                </h2>

                <table className="table mb-5 border my-5 ">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Project Name</th>
                      <th scope="col">PlateForm</th>
                      <th scope="col">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Netflix Clone</td>
                      <td>Reactjs / css </td>
                      <td>Ui Design And Api Integration</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Food Recipe App</td>
                      <td>Reactjs / Bootstrap / css</td>
                      <td>Ui Deasign And Api Integration</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td> Self Portfolio site</td>
                      <td> Reactjs/ BootStrap / css </td>
                      <td> Complete Design And Development</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-center my-5 ">
            <a className="btn btn-primary" href={resume} rel="_blank">
              Get-Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;





// import React from 'react'

// const Resume = () => {
//   return (
//     <>
//     <div class="container-fluid" d-flex >
      
   
// <div id="list-example" class="list-group">
//   <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
//   <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
//   <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
//   <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
// </div>
// <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
//   <h4 id="list-item-1">Item 1</h4>
//   <p>... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptatibus deserunt sit ad deleniti ut aperiam explicabo ex, distinctio dolore cupiditate fugiat eligendi, consequatur quos assumenda nostrum repellendus laudantium! Voluptatem!</p>
//   <h4 id="list-item-2">Item 2</h4>
//   <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam accusamus suscipit incidunt praesentium, numquam enim eveniet fuga illo similique, provident perferendis saepe nostrum odit impedit pariatur voluptate, consequatur eos natus.</p>
//   <h4 id="list-item-3">Item 3</h4>
//   <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae in doloremque quos nulla dolorem culpa maiores explicabo. Dicta, esse sapiente aut et quas nisi, illum unde minus repudiandae, nostrum dolores!</p>
//   <h4 id="list-item-4">Item 4</h4>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum asperiores recusandae praesentium. Culpa adipisci quaerat ipsa quod unde, obcaecati ab iusto maxime autem aliquam numquam dolorem quisquam laudantium doloribus.</p>
// </div>
//     </div>
//     </>
//   )
// }

// export default Resume
