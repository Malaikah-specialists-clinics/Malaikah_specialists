
import React from 'react'

const EmeservSreen = () => {
    return (
      <>
        <div className="row-herosect">
          <div className="formcontent">
            <img className="emeryserviceimg col-md-6" src="/images/emeservice.jpg" alt="" />
            <h1 className="headingsect col-md-6"> Emergency <br/> Service
            </h1>
          </div>
        </div>

        <div>
            <h5 className="emeserviceheading" id="emeserviceheading">We’re Ready When You Need Us</h5>
            <ul className="emecontent">
              <li>
                Our Emergency Centre provides services 24 hours a day 7 days a
                week. It serves as an Emergency Department, Out-Patient
                Department and as entry point for all the admission cases.
              </li>
              <li>
                A well laid out emergency preparedness plan coupled with
                well-equipped staff has made the Centre a one-stop Centre able
                to handle mass accidents, advanced trauma, gunshots, disaster
                management, poisons, and cases like malaria, pneumonia,
                non-communicable and communicable diseases, and many others.
              </li>
              <li>
                The Emergency Department comprises of motivated team of doctors,
                nurses, technicians and other para health professionals well
                skilled who undergo regular training to ensure their skills and
                knowledge is up to date.
              </li>
            </ul>
        </div>
      </>
    );
}

export default EmeservSreen
