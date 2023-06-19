import { Component, React } from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg border-bottom border-bottom-dark">
          <div className="container-fluid">
            <a className="navbar-brand logo" href="#">
              Demo company
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="home" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 align-items-baseline">
                <li className="nav-item right">
                  <a className="nav-link " href="#">
                    <FontAwesomeIcon icon={faGear} />
                  </a>
                </li>
                <li className="nav-item right">
                  <a className="nav-link " href="#">
                    <FontAwesomeIcon icon={faBell} />
                  </a>
                </li>
                <li className="nav-item right">
                  <a className="nav-link " href="#">
                    <img
                      src="/random.jpg"
                      height="40px"
                      width="40px"
                      className="rounded-circle"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
