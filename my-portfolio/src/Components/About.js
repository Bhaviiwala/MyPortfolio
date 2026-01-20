import aboutImg from "../assets/About.jpeg";

function About() {
  return (
    <div className="about-new">
      {/* LEFT PROFILE */}
      <div className="about-profile">
        <div className="profile-img-wrap">
          <img src={aboutImg} alt="Bhavi" />
          <div className="profile-name">BHAVI IWALA</div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="about-content">
        <h2 className="title">About Me</h2>
        <p className="intro">
          I’m a passionate Software Developer focused on building modern,
          scalable and user-friendly applications using ASP.NET Core, React
          and desktop technologies.
        </p>

        {/* SKILLS */}
        <div className="about-cards">
          <div className="card">
            <h4>Frontend</h4>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>
          <div className="card">
            <h4>Backend</h4>
            <p>ASP.NET Core MVC, .NET API, Desktop App</p>
          </div>
          <div className="card">
            <h4>Database</h4>
            <p>SSMS, MySQL</p>
          </div>
        </div>

        {/* ABOUT TEXT */}
        <div className="section">
          <h3>Who I Am</h3>
          <p>
            I enjoy turning ideas into real applications. I focus on clean
            code, performance and real-world problem solving.
          </p>
        </div>

        <div className="section">
          <h3>Interests & Hobbies</h3>
          <p>
            Learning new technologies, building projects, exploring new
            places and improving myself every day.
          </p>
        </div>

        {/* EXPERIENCE + EDUCATION */}
        <div className="about-grid">
          <div>
            <h3>Experience</h3>
            <ul>
              <li>Infoweb Solution (Jan–Jun 2024)</li>
              <li>Gatisoft Tech (Oct–Nov 2024)</li>
              <li>Lariox Technologies (Dec 2024–Present)</li>
            </ul>
          </div>
          <div>
            <h3>Education</h3>
            <ul>
              <li>B.C.A – C.B. Patel College</li>
              <li>M.Sc (I.C.T.) – J.P. Dawar Institute</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
