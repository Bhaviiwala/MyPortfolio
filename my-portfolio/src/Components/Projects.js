function Projects() {
    return (
      <div className="projects-page">
        <h2>Latest Projects</h2>
  
        <div className="project-card">
          <div className="project-info">
            <h3>Fresh You – E-Commerce Website</h3>
            <p>
              Developed Fresh You, an e-commerce website for buying/selling fresh fruits
              and vegetables. Worked on product listing, user authentication and order
              management using ASP.NET MVC.
            </p>
            <p className="tech">Tech: .NET C#, ASP.NET MVC, HTML, CSS, JavaScript</p>
          </div>
        </div>
  
        <div className="project-card">
          <div className="project-info">
            <h3>HRMS – Human Resource Management System</h3>
            <p>
              Web application using ASP.NET Core MVC. Includes Leave, Task, Payroll,
              Attendance (real-time location), Resignation, Joining process, Policy,
              Punching Machine record fetch, Support Ticket and Login system.
            </p>
            <p className="tech">Tech: ASP.NET Core MVC, HTML, CSS, JS, SSMS</p>
          </div>
        </div>
  
        <div className="project-card">
          <div className="project-info">
            <h3>BMS – Batch Management System</h3>
            <p>
              Desktop application using WPF. Developing Tag Linker, Recipe Editor,
              Batch Scheduler and Batch Display.
            </p>
            <p className="tech">Tech: WPF, .NET, Desktop App</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;
  