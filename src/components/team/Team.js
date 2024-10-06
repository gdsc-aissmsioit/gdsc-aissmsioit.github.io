import React, { useState } from "react";

import "./Team.css";

import Team2021 from "./Team2021/Team2021";
import Team2022 from "./Team2022/Team2022";
import Team2023 from "./Team2023/Team2023";
import Team2024 from "./Team2024/Team2024";
import Team_Svg from "../../images/team/Team.gif";

import { Helmet } from "react-helmet";

const Team = () => {
  const [selectedYear, setSelectedYear] = useState("2024"); // Default year

  const handleToggle = (year) => {
    setSelectedYear(year);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Team - GDG</title>
        <meta name="title" content="Team - GDG" />
        <meta
          name="description"
          content="Have a look at the great minds of GDG AISSMS IOIT. None of us, including me, ever do great things. But we can all do small things, with great love, and together we can do something wonderful."
        />
        <meta
          name="keywords"
          content="gdsc team, gdsc aissms team, gdsc aissms ioit team, dsc, dsc aissms team, dsc aissms ioit team, gdsc ioit team, dsc ioit team, ioit dsc team, aissms dsc team, aissms ioit dsc team, aissms ioit gdsc team, gdsc-aissms-ioit team, gdsc-ioit team, dsc-aissms-ioit team, dsc-ioit team"
        />
      </Helmet>
      <div className="container-fluid team-heading">
        <div className="row">
          <div
            className="col-lg-6 col-sm-12 vector-img"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <img
              className="cursor-pointer Team_Image"
              src={Team_Svg}
              alt="Team_Image"
            />
          </div>
          <div
            className="col-lg 6 col-sm-12 team-body"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <h1 className="font-weight-bold">Meet The Core Team</h1>
            <p className="font-weight-light core_team_text">
              Connect with the great minds who have been working rigorously to
              create a positive impact on the community! "It is literally true
              that you can succeed best and quickest by helping others to
              succeed." – Napolean Hill
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="button-container">
          <button
            className={`custom-button gred ${
              selectedYear === "2024" ? "active" : ""
            }`}
            onClick={() => handleToggle("2024")}
          >
            2024
          </button>
          <button
            className={`custom-button gred ${
              selectedYear === "2023" ? "active" : ""
            }`}
            onClick={() => handleToggle("2023")}
          >
            2023
          </button>

          <button
            className={`custom-button gyellow ${
              selectedYear === "2022" ? "active" : ""
            }`}
            onClick={() => handleToggle("2022")}
          >
            2022
          </button>

          <button
            className={`custom-button ggreen ${
              selectedYear === "2021" ? "active" : ""
            }`}
            onClick={() => handleToggle("2021")}
          >
            2021
          </button>
        </div>

        {selectedYear === "2021" && <Team2021 />}
        {selectedYear === "2022" && <Team2022 />}
        {selectedYear === "2023" && <Team2023 />}
        {selectedYear === "2024" && <Team2024 />}
      </div>

      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </>
  );
};

export default Team;
