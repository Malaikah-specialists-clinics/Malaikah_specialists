import React from "react";
import SideNavbar from "./SideNavbar";

const PatientProfile =()=> {
  
  return (
    <div style={{ background: '#f8f8f8' }}>
      <div className="formcontent">
        {/* <ScriptTag isHydrating={true} type="text/JavaScript" src='pic.js'/> */}
        <SideNavbar />

        <div class="content-container">
          <div class="container-fluid">
            {/* Main component for a primary marketing message or call to action */}
            <div class="jumbotron">
              <main>
                <div className="profile ">
                  <div class="profile-pic-div offset-sm-5">
                    <img src="/images/79285222.jpeg" id="photo" alt="" />
                    <input type="file" id="file" />
                    <label for="file" id="uploadBtn">
                      Change Picture
                    </label>
                  </div>
                  <div style={{ margin: '-180px 0 0' }}>
                    <h4>Lary Marc</h4>
                  </div>
                </div>

                <div className="info ">
                  <h3>Personal Information</h3>
                  <div class="row">
                    <div class="col-sm-6">
                      <div>
                        <h5>Date of birth</h5>
                        <h4>22-03-1945</h4>
                      </div>
                      <div>
                        <h5>Gender</h5>
                        <h4>Male</h4>
                      </div>
                      <div>
                        <h5>Address</h5>
                        <h4>Lia Street, Moroto</h4>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div>
                        <h5>Phone</h5>
                        <h4>+256789212384</h4>
                      </div>
                      <div>
                        <h5>Marital Status</h5>
                        <h4>Single</h4>
                      </div>
                      <div>
                        <h5>Date Joined</h5>
                        <h4>30-05-2021</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }


export default PatientProfile;
