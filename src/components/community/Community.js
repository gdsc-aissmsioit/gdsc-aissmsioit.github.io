import React from "react";

import "./Community.css";

import { Row, Col } from "react-bootstrap";

import Logo from "../../images/community/logo.jpg";
import about_img from "../../images/community/about.gif";
import about_us from "../../images/community/about-us.jpeg";

import Fade from "react-reveal/Fade";

import { Helmet } from "react-helmet";

const Community = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ABOUT US - GDSC IOIT</title>
        <meta
          name="description"
          content="Google Developer Student Clubs (GDSC) are community groups for
          college and university students interested in Google developer
          technologies. Students from all undergraduate or graduate
          programs with an interest in growing as a developer are
          welcome. By joining a GDSC, students grow their knowledge in a
          peer-to-peer learning environment and build solutions for
          local businesses and their community."
        />
        <meta
          name="keywords"
          content="gdsc about, gdsc aissms about, gdsc aissms ioit about, dsc, dsc aissms about, dsc aissms ioit about, gdsc ioit about, dsc ioit about, ioit dsc about, aissms dsc about, aissms ioit dsc about, aissms ioit gdsc about, gdsc-aissms-ioit about, gdsc-ioit about, dsc-aissms-ioit about, dsc-ioit about"
        />
      </Helmet>
      <Row className="justify-content-center">
        <Col className="align-items-center about-img-div" sm={12} lg={6}>
          <img
            src={about_img}
            alt="About_Image"
            className="cursor-pointer about_image"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          />
        </Col>
        <Col className="about-txt align-items-center" sm={12} lg={6}>
          <div
            className="container about-body"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <div className="card p-lg-2 p-0">
              <div className="card-body">
                <h1 className="card-title text-center font-weight-bolder mt-3 mt-lg-5 mb-0">
                  About Us
                </h1>
                <p className="card-text about-para font-weight-light px-lg-5">
                  Google Developer Student Clubs (GDSC) are community groups for
                  college and university students interested in Google developer
                  technologies. Students from all undergraduate or graduate
                  programs with an interest in growing as a developer are
                  welcome. By joining a GDSC, students grow their knowledge in a
                  peer-to-peer learning environment and build solutions for
                  local businesses and their community.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <Fade up>
        <Row className="who_block">
          <Col sm={12} lg={6} md={6} xl={6}>
            <div className="container ">
              <div className="card who">
                <div className="card-body">
                  <img
                    src={Logo}
                    className="img-fluid who-design-left"
                    alt="Logo"
                  />

                  <h2 className="card-title text-center font-weight-bolder">
                    What we do
                  </h2>

                  <img
                    src={Logo}
                    className="img-fluid who-design-right"
                    alt="Logo"
                  />
                  <p className="card-text pt-2 text-center">
                    We at GDSC, AISSMS Institute of Information Technology are
                    ambitious towards building a community that aims to change
                    the world with technology. We do this by organizing
                    insightful events, hands-on workshops, interactive sessions,
                    hackathons, study-jams and more. We believe in creating a
                    peer-to-peer learning environment to grow together as a
                    community.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Fade>

      <Fade up>
        <div
          className="msg-img cursor-pointer text-center"
          style={{ margin: "3em auto" }}
        >
          <img src={about_us} alt="about_us" className="about_us" />
        </div>
      </Fade>

      <Fade up>
        <Row className="who_block">
          <Col sm={12} lg={6} md={6} xl={6}>
            <div className="container ">
              <div className="card who">
                <div className="card-body">
                  <img
                    src={Logo}
                    className="img-fluid who-design-left"
                    alt="Logo"
                  />

                  <h2 className="card-title text-center font-weight-bolder">
                    Our Mission and Vision
                  </h2>

                  <img
                    src={Logo}
                    className="img-fluid who-design-right"
                    alt="Logo"
                  />
                  <p className="card-text pt-2 text-center">
                    Our MISSION and VISION is to build a peer-to-peer learning
                    environment for students where they can grow together as
                    developers and contribute to solving real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Fade>

      {/* <Fade up>
        <Row className="row2 justify-content-center our_mission">
          <Col sm={12} lg={9} md={9} xl={8} className="col2">
            <div className="msg-card">
              <div className="msg-wrap mission">
                <div className="msg-block mt-4">
                  <h2 className="msg-title card-title text-center">
                    Our Mission and Vision
                  </h2>
                  <div className="msg-text text-center">
                    Our MISSION and VISION is to build an environment for
                    students where they can grow as coders and developers and
                    contribute to the community. We strive to learn and grow
                    together as one.
                  </div>
                </div>
                <div className="msg-img cursor-pointer">
                  <img src={about_us} alt="about_us" className="about_us" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Fade> */}
    </>
  );
};

export default Community;
