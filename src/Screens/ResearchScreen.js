import React, { Component } from "react";
import { Link } from "react-router-dom";

class Specialities extends Component {
  render() {
    return (
      <div>
        <div className="res-bimg">
          <div className="res-bcolor">
            <h1
              style={{
                fontSize: "80px",
                padding: "210px 10px 20px",
                color: "whitesmoke",
                fontWeight: "bolder",
              }}
            >
              Our
              <br />
              Research
            </h1>
          </div>
        </div>

        <div
          class="row offset-md-2"
          style={{ height: "auto", marginTop: "30px" }}
        >
          <div class="col-sm-4">
            <div class="card-box" id="card4">
              <div class="card-thumbnail">
                <img
                  className="card-image"
                  src="https://media.msf.org/AssetLink/407080s4p5src3vqpf1mra5oq7t4t8w5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div id="card5">
              <h2>Recent Publication</h2>

              <p>A research about COVID 19 vaccine in Africa ......</p>
              <div class="row">
                <div class="col-3" style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{ background: "#0A1F3E" }}
                  >
                    25/04/2021
                  </Link>
                </div>
                <div class="col-3" style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{
                      background: "white",
                      color: "black",
                      border: "none",
                    }}
                  >
                    25 comments
                  </Link>
                </div>
                <div class="col-3" style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{ background: "#3FE0C1", color: "black" }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="row offset-md-2"
          style={{ height: "auto", marginTop: "30px" }}
        >
          <div class="col-sm-4">
            <div class="card-box" id="card4">
              <div class="card-thumbnail">
                <img
                  className="card-image"
                  src="https://media.msf.org/AssetLink/407080s4p5src3vqpf1mra5oq7t4t8w5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div id="card5">
              <h2>A new discovery</h2>

              <p>Recent publication on psycholigical disorder ......</p>
              <div class="row">
                <div class="col-3" style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{ background: "#0A1F3E" }}
                  >
                    25/04/2021
                  </Link>
                </div>
                <div class="col-3" style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{
                      background: "white",
                      color: "black",
                      border: "none",
                    }}
                  >
                    25 comments
                  </Link>
                </div>
                <div class="col-3" style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{ background: "#3FE0C1", color: "black" }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Specialities;
