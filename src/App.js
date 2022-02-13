import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/home/Home";
import About from "./Component/About/About";
import Project from "./Component/project/Project";
import Resume from "./Component/Resume/Experience";
import Skills from "./Component/Skills/Skills";
import Freelacner from "./Component/Freelaneer/Freelancer.jsx";
import Social from "./Component/Footer/Social"
import React, { useEffect, useState } from "react";
import loder from "./Component/images/pre.svg"



const App = () => {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
    {loading ? <div className="d-flex align-items-center justify-content-center" style={{height:'100vh'}} > 
    
    <img src={loder} alt = "loder"/></div> : 
    <>
    <Navbar />
      <Home />
      <About />
      <Skills />
      <Resume />
      <Project />
      <Freelacner />
      <Social />
      </>}
    </div>
  );
};

export default App;
