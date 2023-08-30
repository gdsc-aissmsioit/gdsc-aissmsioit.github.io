import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Team.css";

import Gdsc_All from "../../../images/gdsc-all.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fade from "react-reveal/Fade";

import Web from "./web";
import ML from "./ml";
import Android from "./android";
import Management from "./management";

import TeamCard from "./TeamCard";

const Team2021 = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  const WebTeam = Web.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const MLTeam = ML.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const AndroidTeam = Android.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const ManagementTeam = Management.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const [teams, setTeams] = useState(
    window.screen.width < 800
      ? {
          web: <Slider {...settings}>{WebTeam}</Slider>,
          ml: <Slider {...settings}>{MLTeam}</Slider>,
          android: <Slider {...settings}>{AndroidTeam}</Slider>,
          management: <Slider {...settings}>{ManagementTeam}</Slider>,
        }
      : {
          web: WebTeam,
          ml: MLTeam,
          android: AndroidTeam,
          management: ManagementTeam,
        }
  );

  const responsive = (media) => {
    if (media.matches) {
      setTeams({
        web: <Slider {...settings}>{WebTeam}</Slider>,
        ml: <Slider {...settings}>{MLTeam}</Slider>,
        android: <Slider {...settings}>{AndroidTeam}</Slider>,
        management: <Slider {...settings}>{ManagementTeam}</Slider>,
      });
    } else {
      setTeams({
        web: WebTeam,
        ml: MLTeam,
        android: AndroidTeam,
        management: ManagementTeam,
      });
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);

  return (
    <>
      <div className="container team-members teams">
        <Fade up>
          <div id="gdsc_lead" className="row">
            <div className="col-lg-6 col-sm-6">
              <Fade up>
                <h3 className="font-weight-bold">GDSC Lead</h3>
              </Fade>

              <div>
                <span
                  className="Tooltip gdsc_lead_tooltip"
                  data-tooltip="Hi! I'm Prarthana. I love to sleep but coding is my coffee ;) I enjoy problem solving and competitive coding. I'm currently learning Node.js and I'm loving it. Can't wait to meet you guys in a GDSC offline event!"
                >
                  <img
                    src="https://i.ibb.co/QbYjh69/Prarthana-Chandak.jpg"
                    className="img-fluid lead-img"
                    alt="Lead_Image"
                  />
                </span>
              </div>

              <h5 className="mt-4">Prarthana Chandak</h5>

              <span></span>
              <div className="social-ico">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/prarthana-chandak-2a84b81b7"
                >
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/prarthanachandak"
                >
                  <i className="fa fa-github ico-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/prarthanachandak"
                >
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
                <a
                  href="https://github.com/prarthanachandak"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-link ico-link"></i>
                </a>
                <a
                  href="https://gdsc.community.dev/u/m84kjc/#/about"
                  className="team-profile-link ml-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Gdsc_All}
                    alt="gdsc_logo"
                    className="team-gdsc-logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 teams">
              <Fade up>
                <h3 className="font-weight-bold">Faculty Advisor</h3>
              </Fade>
              <img
                src="https://i.ibb.co/16LcLWP/Wagh-Sir.png"
                className="img-fluid lead-img"
                alt="Faculty_Advisor"
              />
              <h5 className="mt-4">Dr. K. S. Wagh Sir</h5>
              <span></span>
            </div>
          </div>
        </Fade>

        <div id="web_team" className="row">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">Web Team</h3>
          </Fade>
          {teams.web}
        </div>

        <div id="cloud_team" className="row mt-lg-5">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">Cloud Team</h3>
          </Fade>
          <Fade up>
            <div className="col-lg-12 col-sm-12 teams">
              <div>
                <span
                  className="Tooltip dsa_cp_tooltip"
                  data-tooltip="I am a blockchain and cloud enthusiast, I am passionate about my work and I am a people person who enjoys meeting new individuals."
                >
                  <img
                    src="https://i.ibb.co/x7xHcyz/Shriniwas-Khond.png"
                    className="img-fluid team-img"
                    alt="Lead_Image"
                  />
                </span>
              </div>

              <h5 className="mt-4">Shriniwas Khond</h5>

              <h5>Cloud Lead</h5>
              <span></span>
              <div className="social-ico-team col-lg-12">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/shriniwas-khond-906329209/"
                >
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ShriniwasKhond"
                >
                  <i className="fa fa-github ico-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/shriniwas_khond/"
                >
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
                <a
                  href="https://www.kaggle.com/shriniwaskhond"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-link ico-link"></i>
                </a>
                <a
                  href="https://gdsc.community.dev/u/m8vetm/#/about"
                  className="team-profile-link ml-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Gdsc_All}
                    alt="gdsc_logo"
                    className="team-gdsc-logo"
                  />
                </a>
              </div>
            </div>
          </Fade>
        </div>

        <div id="dsa_cp_team" className="row mt-lg-5">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">DSA/CP Team</h3>
          </Fade>
          <Fade up>
            <div className="col-lg-12 col-sm-12 teams">
              <div>
                <span
                  className="Tooltip dsa_cp_tooltip"
                  data-tooltip="I am pursuing computer engineering , I like to code , listen songs and Wandering the empty roads alone."
                >
                  <img
                    src="https://i.ibb.co/XbMkh0m/HARSHAL-RAUNDAL.png"
                    className="img-fluid team-img"
                    alt="Lead_Image"
                  />
                </span>
              </div>

              <h5 className="mt-4">Harshal Raundal</h5>

              <h5>DSA Lead</h5>
              <span></span>
              <div className="social-ico-team col-lg-12">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/harshal-raundal-8a25861a8"
                >
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/HarshalRaundal"
                >
                  <i className="fa fa-github ico-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/_.harshal__/"
                >
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
                <a
                  href="https://github.com/HarshalRaundal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-link ico-link"></i>
                </a>
                <a
                  href="https://gdsc.community.dev/u/m22fkq/#/about"
                  className="team-profile-link ml-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Gdsc_All}
                    alt="gdsc_logo"
                    className="team-gdsc-logo"
                  />
                </a>
              </div>
            </div>
          </Fade>
        </div>

        <div id="ml_team" className="row mt-lg-5">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">
              Machine Learning Team
            </h3>
          </Fade>
          {teams.ml}
        </div>

        <div id="android_team" className="row mt-lg-5">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">Android Team</h3>
          </Fade>
          {teams.android}
        </div>

        <div id="management_team" className="row mt-lg-5">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">Management Team</h3>
          </Fade>
          {teams.management}
        </div>
      </div>
    </>
  );
};

export default Team2021;
