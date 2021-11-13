import React from "react";

function Header()
{
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" id="logo" href="/">GrafixUI</a>
        <button className="navbar-toggler" id="hamburger" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto dark">
            <li className="nav-item ">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Why Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Our Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li> 
          </ul>
        </div>
      </nav>
      </div>

}
export default Header;