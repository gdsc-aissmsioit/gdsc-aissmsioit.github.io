import React from "react";
import { useParams } from "react-router-dom";

import events from "./events";

import "./Eventdetails.css";

import { Helmet } from "react-helmet";

import Fade from "react-reveal/Fade";

const Eventdetails = () => {
  const { id } = useParams();
  const event = events[events.length - id];
  const points = event.about.split(". ");

  const event_date = new Date(event.date);
  const current_date = new Date();

  const upcoming = event_date.getTime() + 18060000 > current_date.getTime();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EVENT DETAILS GDSC - IOIT</title>
        <meta name="description" content={event.about} />
        <meta
          name="keywords"
          content="gdsc event details, gdsc aissms event details, gdsc aissms ioit event details, dsc, dsc aissms event details, dsc aissms ioit event details, gdsc ioit event details, dsc ioit event details, ioit dsc event details, aissms dsc event details, aissms ioit dsc event details, aissms ioit gdsc event details, gdsc-aissms-ioit event details, gdsc-ioit event details, dsc-aissms-ioit event details, dsc-ioit event details"
        />
      </Helmet>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor=".example-selector"
        data-aos-anchor-placement="top-center"
        className="row"
      >
        <div id="Events" className="span_headings">
          <span>Event Details</span>
        </div>
      </div>
      <div className="events-container">
        <div className="events-card">
          <div
            className={upcoming ? "events-header up" : "events-header"}
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <a
              title="Community Page Event Link"
              target="_blank"
              rel="noreferrer"
              href={event.eventLink}
            >
              <img
                src={event.imageSrc}
                alt="Events_Image"
                className="events-image"
              />
            </a>
          </div>

          <div
            className="events-main"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <div className="events-body">
              <span>
                <b> {event.name}</b>
              </span>
              <span>
                <b>Date :</b> {event.dateAlt}
              </span>
              <span>
                <b>Day :</b> {event.day}
              </span>
              <span>
                <b>Speaker :</b> {event.speaker}
              </span>
              <div>
                <b>Description :</b>
                {points.map((point) => (
                  <li>{point}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Fade up>
          {upcoming ? (
            <a target="_blank" rel="noreferrer" href={event.eventLink}>
              <button className="rsvp-btn">Rsvp</button>
            </a>
          ) : (
            <a target="_blank" rel="noreferrer" href={event.eventLink}>
              <button className="rsvp-btn">Recording and PPT</button>
            </a>
          )}
        </Fade>
      </div>
    </>
  );
};

export default Eventdetails;
