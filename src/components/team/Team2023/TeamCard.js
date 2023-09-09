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
				height="1.1em"
				viewBox="0 0 50 50"
				className="team-gdsc-logo"
				style={{ display: "inline-block" }}
			  >
				<path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
			  </svg>
			</a>
          )}
		  {props.member.googleCloud && (
			<a
			  href={props.member.googleCloud}
			  className="cloud-link"
			  target="_blank"
			  rel="noreferrer"
			>
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				height="1.3em"
				viewBox="0 0 48 48"
				className="team-gdsc-logo"
				style={{ display: "inline-block" }}
			  >
				<path fill="#1976d2" d="M38.193,18.359c-0.771-2.753-2.319-5.177-4.397-7.03l-4.598,4.598	c1.677,1.365,2.808,3.374,3.014,5.648v1.508c0.026,0,0.05-0.008,0.076-0.008c2.322,0,4.212,1.89,4.212,4.212S34.61,31.5,32.288,31.5	c-0.026,0-0.05-0.007-0.076-0.008V31.5h-6.666H24V38h8.212v-0.004c0.026,0,0.05,0.004,0.076,0.004C38.195,38,43,33.194,43,27.288	C43,23.563,41.086,20.279,38.193,18.359z"></path><path fill="#ffe082" d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z" opacity=".5"></path><path fill="#90caf9" d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z" opacity=".5"></path><path fill="#ff3d00" d="M24,7.576c-8.133,0-14.75,6.617-14.75,14.75c0,0.233,0.024,0.46,0.035,0.69h6.5	c-0.019-0.228-0.035-0.457-0.035-0.69c0-4.549,3.701-8.25,8.25-8.25c1.969,0,3.778,0.696,5.198,1.851l4.598-4.598	C31.188,9.003,27.761,7.576,24,7.576z"></path><path fill="#90caf9" d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373	l-4.71,4.71C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z" opacity=".5"></path><path fill="#4caf50" d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373l-4.71,4.71	C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z"></path><path fill="#ffc107" d="M11.5,27.29c0-2.32,1.89-4.21,4.21-4.21c1.703,0,3.178,1.023,3.841,2.494l4.717-4.717	c-1.961-2.602-5.065-4.277-8.559-4.277C9.81,16.58,5,21.38,5,27.29c0,3.491,1.691,6.59,4.288,8.547l4.71-4.71	C12.53,30.469,11.5,28.999,11.5,27.29z"></path>
			  </svg>
			</a>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default TeamCard;
