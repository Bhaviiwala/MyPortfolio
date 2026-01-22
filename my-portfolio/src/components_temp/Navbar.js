import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="side-nav">
      <div className="nav-top">
        <div className="nav-item active" onClick={() => navigate("/")}>🏠</div>
        <div className="nav-item" onClick={() => navigate("/about")}>👤</div>
        <div className="nav-item" onClick={() => navigate("/projects")}>🏆</div>
        <div className="nav-item" onClick={() => navigate("/contact")}>✉️</div>

      </div>

      <div className="nav-bottom">
        <div className="nav-item">📸</div>
        <div className="nav-item">
  <a
    href="https://www.linkedin.com/in/bhavi-iwala-b52590276"
    target="_blank"
    rel="noreferrer"
    className="icon-link"
  >
    in
  </a>
</div>

      </div>
    </div>
  );
}

export default Navbar;
