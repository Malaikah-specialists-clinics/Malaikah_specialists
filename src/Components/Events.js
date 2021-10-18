
import React from "react";


const Events = () => {
  return (
    <div class=''>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2017/12/05112949/hospital-event-promotion.jpg" class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://higherlogicdownload.s3.amazonaws.com/CCGCOP/44c83e86-513d-42d6-b779-70c3625da6b3/UploadedImages/homepage/tile-1-bg.jpeg" class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://www.clarityexperiences.com/hubfs/2018%20Website/2018%20Healthcare/healthcare-event-presentation-cvs-health.jpg" class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class='' style={{margin:'50px'}}>
        <div className='upcoming'>
          <h2>Upcoming Events</h2>
          <h4>Find more Events</h4>
        </div>
        <div class="row events">
        <div class="col-sm-2">
          <div class="card" id="card1">
            <div className="item-date"></div>
            <div>
              <h3 className="day"> 30</h3>
              <h3 className="month">NOV</h3>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="card" id="card2">
            <h2>Food and Nutrition</h2>
            <h6>2.00pm-4.00pm</h6>
            <p>
              The workshop aims to discuss: Preventing noncommunicable dieseases
              and how to boost immunity.
            </p>
            <div>
              <h5 style={{ float: "left" }}>Location:</h5>
              <h6 style={{ float: "left", padding: "3px 15px" }}>Virtual</h6>
            </div>
            <div>
              <h5 style={{ float: "left" }}>Contact:</h5>
              <h6 style={{ float: "left", padding: "3px 15px" }}>
                malaikah@gmail.com
              </h6>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
          <img className='card-image' src="https://images.unsplash.com/photo-1535229398509-70179087ac75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Events;
