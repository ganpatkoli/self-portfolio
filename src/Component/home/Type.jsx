import Typewriter from "typewriter-effect";
import "./home.css"

function Type() {
  return (
    <div className="typeText text-center  visiblity">
    <Typewriter
    
    options={{
      strings: [
        "Front End  DeveLoper",
        "Front End  DeveLoper",
        "Front End  DeveLoper",
        ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
      
    }}
  
    />
    </div>
  );
}

export default Type;