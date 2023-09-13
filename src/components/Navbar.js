import React from 'react'
import{Link , useLocation} from 'react-router-dom'


const Navbar = () => {
  let location = useLocation();
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News Bites</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-link ${location.pathname === "/"? 'active' :''}`}><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
              <li className={`nav-link ${location.pathname === "/health"? 'active' :''}`}><Link className="nav-link" to="/health">Health</Link></li>
              <li className={`nav-link ${location.pathname === "/science"? 'active' :''}`}><Link className="nav-link" to="/science">Science</Link></li>
              <li className={`nav-link ${location.pathname === "/sports"? 'active' :''}`}><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className={`nav-link ${location.pathname === "/technology"? 'active' :''}`}><Link className="nav-link" to="/technology">Technology</Link></li>
              <li className={`nav-link ${location.pathname === "/business"? 'active' :''}`}><Link className="nav-link" to="/business">Business</Link></li>
              <li className={`nav-link ${location.pathname === "/entertainment"? 'active' :''}`}><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
