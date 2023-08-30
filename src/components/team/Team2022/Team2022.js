import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Team.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fade from "react-reveal/Fade";


const Team2023 = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  return (
      <div className="container team-members teams">
        <Fade up>
          <div id="gdsc_lead" className="row">
            <div className="col-lg-6 col-sm-6">
              <Fade up>
                <h3 className="font-weight-bold">GDSC Lead</h3>
              </Fade>

              <div>
                <span>
                  <img
                    src="https://i.ibb.co/f22kTXN/missing-headshot-jpeg.webp"
                    className="img-fluid lead-img"
                    alt="Lead_Image"
                  />
                </span>
              </div>

              <h5 className="mt-4">First Last</h5>

              <span></span>
              <div className="social-ico">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <i className="fa fa-github ico-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 teams">
              <Fade up>
                <h3 className="font-weight-bold">Faculty Advisor</h3>
              </Fade>
              <img
                src="https://i.ibb.co/f22kTXN/missing-headshot-jpeg.webp"
                className="img-fluid lead-img"
                alt="Faculty_Advisor"
              />
              <h5 className="mt-4">First Last</h5>
              <span></span>
            </div>
          </div>
        </Fade>
	</div>
  );
};

export default Team2023;
