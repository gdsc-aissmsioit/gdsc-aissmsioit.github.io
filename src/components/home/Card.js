import React from "react";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../footer/ScrollToTop";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <NavLink onClick={scrollToTop} to={`/events/${props.event.id}/`}>
          <img
            src={props.event.imageSrc}
            className="img-fluid event-img"
            alt="Event_Image"
          />
        </NavLink>
      </div>
      <h5 className="mt-3 text-primary">{props.event.dateAlt}</h5>
    </div>
  );
};

export default Card;
