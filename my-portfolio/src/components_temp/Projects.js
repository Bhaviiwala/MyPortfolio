import { motion } from "framer-motion";
import freshyou from "../assets/freshyou.png";
import hrms from "../assets/hrms.png";
import bms from "../assets/Bms.png";
import awsCert from "../assets/aws-cert.png";   // your certificate image

function Projects() {
  const projects = [
    {
      title: "Fresh You – E-Commerce Website",
      img: freshyou,
      desc: "E-commerce website for buying/selling fresh fruits and vegetables with product listing, authentication and order management.",
      tech: "Tech: .NET C#, ASP.NET MVC, HTML, CSS, JavaScript",
    },
    {
      title: "HRMS – Human Resource Management System",
      img: hrms,
      desc: "Web app with Leave, Task, Payroll, Attendance, Resignation, Joining, Policy, Punching Machine record and Support Ticket system.",
      tech: "Tech: ASP.NET Core MVC, HTML, CSS, JS, SSMS",
    },
    {
      title: "BMS – Batch Management System",
      img: bms,
      desc: "Desktop app with Tag Linker, Recipe Editor, Batch Scheduler and Batch Display modules.",
      tech: "Tech: WPF, .NET, Desktop App",
    },
  ];

  return (
    <div className="projects-page">
      {/* PROJECTS */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Latest Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card creative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={p.img} alt={p.title} className="project-img" />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p className="tech">{p.tech}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ACHIEVEMENTS */}
      <motion.h2
        style={{ marginTop: "70px" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </motion.h2>

      <div className="achievement-wrapper">
        <motion.div
          className="achievement-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={awsCert} alt="AWS Certificate" className="achievement-img" />
          <div className="project-info">
            <h3>AWS Cloud Practitioner Certificate</h3>
            <p>
              Successfully completed AWS Cloud Practitioner certification,
              covering cloud fundamentals, security, pricing and core AWS services.
            </p>
            <p className="tech">Achievement: AWS Certified Cloud Practitioner</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
