import profile from "../assets/profile.png";

function Hero() {
  return (
    <div className="hero2">
      <div className="hero2-image">
        <div className="circle-bg"></div>
        <img src={profile} alt="profile" />
      </div>

      <h2 className="role reveal">Software Developer_</h2>

     <p className="desc reveal">
      A passionate Software Developer 🚀 with a strong interest in ASP.NET Core MVC, desktop
        application development, and modern web technologies 🌐. I enjoy building secure
        scalable, and user-friendly applications using ASP.NET for web and desktop platforms, and
        crafting responsive, interactive interfaces with React.js. I focus on clean code, performance,
        and real-world problem solving, turning ideas into reliable software solutions. Always
        eager to learn new technologies, explore new tools, and continuously improve my skills to
        build innovative and impactful applications 💻✨.
      </p>

      <a href="/Resume-Bhavi_Iwala.pdf" download>
  <button className="resume-btn glow">Download Resume</button>
</a>


    </div>
  );
}

export default Hero;
