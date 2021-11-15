import React from "react";

const EventReg = () => {
  return (
<div className="container" style={{ margin: "55px auto" }}>
      <h1 style={{ textAlign: "center" }}>Healthy for the Holidays 2021</h1>
      <h4 style={{ fontSize: "16px" }}>
        Date:
        <span>Saturday, December 4, 2021</span>
      </h4>
      <h4 style={{ fontSize: "16px" }}>
        Time:
        <span>10:00 AM - 11:30 AM</span>
      </h4>

      <h2>Attendee Information</h2>
      <p>Please fill in your information to help us prepare for the event</p>
      <div>
        <div>
          <label>Name</label>
          <input type="text" name="name" className="form-control" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div class="d-grid gap-2 col-6 mx-auto" style={{ marginTop: "25px " }}>
          <button class="btn btn-warning" type="button">
            Submit
          </button>
          <a class="btn btn-light" role="button" href="#moeevents">
            Cancel
            </a>
        </div>
      </div>
    </div>
  );
};

export default EventReg;
