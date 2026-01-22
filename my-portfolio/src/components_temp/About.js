import profile from "../assets/About.jpeg";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about-page-full">
      
      {/* ===== TOP SECTION ===== */}
      <div className="about-top">
        {/* LEFT IMAGE */}
        {/* LEFT IMAGE */}
<div className="about-left-panel">
  <motion.img
    src={profile}
    alt="Profile"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ 
      scale: [0.95, 1.05, 1], 
      opacity: [0, 1, 1] 
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      repeatType: "reverse" 
    }}
  />

  <motion.div
    className="name-tag shine-tag"
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    whileHover={{ scale: 1.05 }}
  >
    BHAVI IWALA
  </motion.div>
</div>


        {/* RIGHT DARK PANEL */}
        <div className="about-right-panel">
          <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}}>
            I'm Specialized in
          </motion.h2>
          

          <div className="skill-block">
            <h4>Front-End</h4>
            <div className="skill-row"><span>HTML</span><div className="bar"><div style={{width:"85%"}} /></div></div>
            <div className="skill-row"><span>CSS</span><div className="bar"><div style={{width:"85%"}} /></div></div>
            <div className="skill-row"><span>JavaScript</span><div className="bar"><div style={{width:"80%"}} /></div></div>
            <div className="skill-row"><span>React.js</span><div className="bar"><div style={{width:"85%"}} /></div></div>
          
            
          </div>

          <div className="skill-block">
            <h4>Back-End</h4>
            <div className="skill-row"><span>ASP.NET</span><div className="bar"><div style={{width:"90%"}} /></div></div>
            <div className="skill-row"><span>SQL</span><div className="bar"><div style={{width:"80%"}} /></div></div>
          </div>

          <div className="about-text">
            <h3>01. About Me</h3>
            <p>Software Developer focused on clean code and real-world solutions.</p>

            <h3>02. Interests & Hobbies</h3>
            <p>Learning new tech, building projects, traveling and self-growth.</p>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="about-bottom">
        <div>
          <h2>Employment</h2>
          <p><b>Lariox Technologies</b> – Software Developer (Dec 2024-Present)</p>
          <p><b>Gatisoft Tech</b> (Nov-2024)</p>
          <p><b>InfoWeb Solutions</b>(Jan-2024 To June-2024)</p>
        </div>

        <div>
          <h2>Education</h2>
          <p><b>M.Sc (I.C.T.)</b> – J.P. Dawar Institute</p>
          <p><b>B.C.A</b> – C.B. Patel College</p>
        </div>
      </div>

    </div>
  );
}

export default About;
