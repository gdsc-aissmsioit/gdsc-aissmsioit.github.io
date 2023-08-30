import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Team.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fade from "react-reveal/Fade";

import Web from "./web";
import Cloud from "./cloud";
import ML from "./ml";
import Android from "./android";
import Management from "./management";
import Design from "./design";

import TeamCard from "./TeamCard";

const Team2023 = () => {
  const { id } = useParams();

  useEffect(() => {
    const imgFluids = document.getElementsByClassName("img-fluid");
    Array.from(imgFluids).forEach((img) => {
      img.addEventListener("mouseover", () => {
        img.classList.remove("out");
        img.classList.add("over");
      });

      img.addEventListener("mouseout", () => {
        img.classList.remove("over");
        img.classList.add("out");
      });
    });

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

  const CloudTeam = Cloud.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));
  const DesignTeam = Design.map((member) => (
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
          cloud: <Slider {...settings}>{CloudTeam}</Slider>,
          design: <Slider {...settings}>{DesignTeam}</Slider>,
          ml: <Slider {...settings}>{MLTeam}</Slider>,
          android: <Slider {...settings}>{AndroidTeam}</Slider>,
          management: <Slider {...settings}>{ManagementTeam}</Slider>,
        }
      : {
          web: WebTeam,
          cloud: CloudTeam,
          design: DesignTeam,
          ml: MLTeam,
          android: AndroidTeam,
          management: ManagementTeam,
        }
  );

  const responsive = (media) => {
    if (media.matches) {
      setTeams({
        web: <Slider {...settings}>{WebTeam}</Slider>,
        cloud: <Slider {...settings}>{CloudTeam}</Slider>,
        design: <Slider {...settings}>{DesignTeam}</Slider>,
        ml: <Slider {...settings}>{MLTeam}</Slider>,
        android: <Slider {...settings}>{AndroidTeam}</Slider>,
        management: <Slider {...settings}>{ManagementTeam}</Slider>,
      });
    } else {
      setTeams({
        web: WebTeam,
        cloud: CloudTeam,
        design: DesignTeam,
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
                <span>
                  <img
                    src="https://i.ibb.co/cCyVvHd/sid.png"
                    className="img-fluid lead-img"
                    alt="Lead_Image"
                  />
                </span>
              </div>

              <h5 className="mt-4">Siddhant Sangale</h5>

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
            <h3 className="my-5 font-weight-bold">Web Team</h3>
          </Fade>
          {teams.web}
        </div>

        <div id="cloud_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Cloud Team</h3>
          </Fade>
          {teams.cloud}
        </div>

        <div id="design_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Design Team</h3>
          </Fade>
          {teams.design}
        </div>

        <div id="ml_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Machine Learning Team</h3>
          </Fade>
          {teams.ml}
        </div>

        <div id="android_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Android Team</h3>
          </Fade>
          {teams.android}
        </div>

        <div id="management_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Management Team</h3>
          </Fade>
          {teams.management}
        </div>
      </div>
    </>
  );
};

export default Team2023;
