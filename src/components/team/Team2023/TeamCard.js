import React from "react";
import Fade from "react-reveal/Fade";

const TeamCard = (props) => {
  return (
    <Fade up>
      <div className={`col-lg-${props.member.col} col-12 teams`}>
        <img
          src={props.member.image}
          className="img-fluid team-img m-auto"
          alt={props.member.alt}
        />
        <h5>{props.member.name}</h5>
        <h5>{props.member.position}</h5>
        <span></span>
        <div className="social-ico-team col-lg-12">
          {props.member.linkedin && (
            <a href={props.member.linkedin} target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin ico-link"></i>
            </a>
          )}
          {props.member.github && (
            <a href={props.member.github} target="_blank" rel="noreferrer">
              <i className="fa fa-github ico-github"></i>
            </a>
          )}
          {props.member.instagram && (
            <a href={props.member.instagram} target="_blank" rel="noreferrer">
              <i className="fa fa-instagram ico-insta"></i>
            </a>
          )}
          {props.member.link && (
            <a href={props.member.link} target="_blank" rel="noreferrer">
              <i className="fa fa-link ico-link"></i>
            </a>
          )}
		  {props.member.twitter && (
			<a
			  href={props.member.twitter}
			  className="twitter-link"
			  target="_blank"
			  rel="noreferrer"
			>
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				height="1em"
				viewBox="0 0 512 512"
				className="team-gdsc-logo"
				style={{ display: "inline-block" }}
			  >
				<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
			  </svg>
			</a>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default TeamCard;
