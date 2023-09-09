import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Team.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fade from "react-reveal/Fade";

import Web from "./web";
import ML from "./ml";
import Android from "./android";
import Management from "./management";
import Design from "./design"
import Dsa from "./dsa"
import Outreach from "./outreach"
import Cloud from "./cloud"

import TeamCard from "./TeamCard";

const Team2022 = () => {
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

  const ManagementTeam = Management.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  
  const MLTeam = ML.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const AndroidTeam = Android.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));
  const CloudTeam = Cloud.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const DesignTeam = Design.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const DsaTeam = Dsa.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const OutreachTeam = Outreach.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const [teams, setTeams] = useState(
    window.screen.width < 800
      ? {
          web: <Slider {...settings}>{WebTeam}</Slider>,
          ml: <Slider {...settings}>{MLTeam}</Slider>,
          android: <Slider {...settings}>{AndroidTeam}</Slider>,
          management: <Slider {...settings}>{ManagementTeam}</Slider>,
          design: <Slider {...settings}>{DesignTeam}</Slider>,
          cloud: <Slider {...settings}>{CloudTeam}</Slider>,
          outreach: <Slider {...settings}>{OutreachTeam}</Slider>,
          dsa: <Slider {...settings}>{DsaTeam}</Slider>,
        }
      : {
          web: WebTeam,
          ml: MLTeam,
          android: AndroidTeam,
          management: ManagementTeam,
          cloud: CloudTeam,
          design: DesignTeam,
          outreach:OutreachTeam,
          dsa: DsaTeam,
        }
  );

  // console.log(teams.management);
  const responsive = (media) => {
    if (media.matches) {
      setTeams({
        web: <Slider {...settings}>{WebTeam}</Slider>,
        ml: <Slider {...settings}>{MLTeam}</Slider>,
        android: <Slider {...settings}>{AndroidTeam}</Slider>,
        management: <Slider {...settings}>{ManagementTeam}</Slider>,
        design: <Slider {...settings}>{ManagementTeam}</Slider>,
        cloud: <Slider {...settings}>{CloudTeam}</Slider>,
          outreach: <Slider {...settings}>{OutreachTeam}</Slider>,
          dsa: <Slider {...settings}>{DsaTeam}</Slider>,
      });
    } else {
      setTeams({
        web: WebTeam,
        ml: MLTeam,
        android: AndroidTeam,
        management: ManagementTeam,
        design: DesignTeam,
        cloud: CloudTeam,
          outreach:OutreachTeam,
          dsa: DsaTeam,
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
            <div className="col-lg-4 col-sm-6">
              <Fade up>
                <h3 className="font-weight-bold">GDSC Lead</h3>
              </Fade>

              <div>
                <span>
                  <img
                    src="https://i.ibb.co/RhLkD2k/PRAKALP-PANDE.jpg"
                    className="img-fluid lead-img"
                    alt="Lead_Image"
                  />
                </span>
              </div>

              <h5 className="mt-4">Prakalp Pande</h5>

              <span></span>
              <div className="social-ico">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/prakalp-pande/"
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
			<div className="col-lg-4 col-sm-6">
              <Fade up>
                <h3 className="font-weight-bold">GDSC Co-Lead</h3>
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
                  href="https://www.linkedin.com/in/siddhant-sangale-39a29724b/"
                >
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/SiddhantSangale"
                >
                  <i className="fa fa-github ico-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/sidd.hant_17"
                >
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 teams">
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

        <div id="DSA_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">DSA Team</h3>
          </Fade>
          {teams.dsa}
        </div>

        <div id="management_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Management Team</h3>
          </Fade>
          {teams.management}
        </div>
        
        <div id="outreach_team" className="row">
          <Fade up>
            <h3 className="my-5 font-weight-bold">Outreach Team</h3>
          </Fade>
          {teams.outreach}
        </div>
      </div>

    </>
  );
};

export default Team2022;
