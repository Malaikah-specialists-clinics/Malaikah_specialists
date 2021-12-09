import React from "react";
import { Link, NavLink } from "react-router-dom";


function SideNavbar() {
  return (
    
    <div style={{ marginTop: '1%', paddingTop: '2.5%' }}>
      <header className="container">
        {/* <div>
          <h5 style={{ float: 'right', color: 'black' }}>
            Send Message
          </h5>
        </div> */}
      </header>
      <div class="sidebar-container">
        <ul class="sidebar-navigation">
          <li class="header">Dashboard</li>
          <li>
            <Link to="/profile" id="current">
              <img src="/images/profileicon.png " alt="" style={{ width: '20%', height: '20%' }}/>
              Profile
            </Link>
          </li>
          <li>
            <NavLink to="/appts" id="current">
              <img src="/images/bookappticon-01.png " alt="" style={{ width: '20%', height: '30px' }}/>
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink to="#" id="current">
              <img src="/images/medicalhist-icon-02.png " alt="" style={{ width: '20%', height: '30px' }}/>
              Medical History
            </NavLink>
          </li>
        </ul>
      </div>
   
    </div>
  );
}

export default SideNavbar;
