import React from "react";
import { Link, NavLink } from "react-router-dom";

function SideNavbar() {
  // const refreshPage = () => {
  //   window.location.reload();
  // };

  // const refreshPage2 = () => {
  //   window.location.reload();
  // };

  return (
    <div style={{ marginTop: '115px', paddingTop: '30px' }}>
      <header className="container">
        <div className="heading">
          <h2 style={{ float: 'left' }}> Patient-</h2>
          <h4 style={{ float: 'left' }}>Lary Marc</h4>
        </div>
        <div>
          <h5 style={{ float: 'right', color: 'black', marginTop: '20px' }}>
            Send Message
          </h5>
        </div>
      </header>
      <div class="sidebar-container">
        <ul class="sidebar-navigation">
          <li class="header">Dashboard</li>
          <li>
            <Link to="/pdash" id="current">
              <img src="/images/profileicon.png " alt="" style={{ width: '20%', height: '20%' }}/>
              Profile
            </Link>
          </li>
          <li>
            <NavLink to="/appts" id="current">
              <img src="/images/profileicon.png " alt="" style={{ width: '20%', height: '20%' }}/>
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink to="#" id="current">
              <img src="/images/profileicon.png " alt="" style={{ width: '20%', height: '20%' }}/>
              Medical History
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavbar;
