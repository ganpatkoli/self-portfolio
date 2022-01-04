import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/home/Home";
import About from "./Component/About/About"
import Project from "./Component/project/Project";
import Resume from "./Component/Resume/Experience";
import Contact from "./Component/contact/Contact";
import Skills from "./Component/Skills/Skills";
import Freelacner from "./Component/Freelaneer/Freelancer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
 
     <Home/>
    <About/>
    <Skills/>
     <Resume/>
    <Project/>
<Freelacner/>
    <Contact/>
    
    
    </>
  );
};

export default App;
