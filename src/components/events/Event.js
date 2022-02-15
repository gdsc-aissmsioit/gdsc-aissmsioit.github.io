import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Event.css";

import EventCard from "./EventCard";
import WorkshopCard from "./WorkshopCard";

import events from "./events";
import workshops from "./workshops";

import CloseButton from "../../images/event/close.png";
import Gdsc_Logo from "../../images/google_gdsc_logo.png";

import Fade from "react-reveal/Fade";

import emailjs from "@emailjs/browser";

import { scrollToTop } from "../footer/ScrollToTop";

import { Helmet } from "react-helmet";

const Event = () => {
  const { popup } = useParams();

  useEffect(() => {
    const upcomingEvents = document.getElementById("Upcoming_Events_Span");
    const pastEvents = document.getElementById("Past_Events_Span");
    const upcomingWorkshops = document.getElementById(
      "Upcoming_Workshops_Span"
    );
    const pastWorkshops = document.getElementById("Past_Workshops_Span");

    upcomingEvents.addEventListener("click", () => {
      upcomingEvents.classList.remove("btn-14");
      upcomingEvents.classList.add("btn-13");
      pastEvents.classList.remove("btn-13");
      pastEvents.classList.add("btn-14");
    });

    pastEvents.addEventListener("click", () => {
      pastEvents.classList.remove("btn-14");
      pastEvents.classList.add("btn-13");
      upcomingEvents.classList.add("btn-14");
      upcomingEvents.classList.remove("btn-13");
    });

    upcomingWorkshops.addEventListener("click", () => {
      upcomingWorkshops.classList.remove("btn-14");
      upcomingWorkshops.classList.add("btn-13");
      pastWorkshops.classList.remove("btn-13");
      pastWorkshops.classList.add("btn-14");
    });

    pastWorkshops.addEventListener("click", () => {
      pastWorkshops.classList.remove("btn-14");
      pastWorkshops.classList.add("btn-13");
      upcomingWorkshops.classList.add("btn-14");
      upcomingWorkshops.classList.remove("btn-13");
    });

    const popUp = document.getElementsByClassName("pop-up")[0];
    const button = document.getElementsByClassName("button")[0];
    const close = document.getElementsByClassName("close")[0];

    button.addEventListener("click", () => {
      popUp.classList.add("open");
    });

    close.addEventListener("click", () => {
      popUp.classList.remove("open");
    });

    if (popup === "popup") popUp.classList.add("open");
  }, [popup]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  let upcoming_events = [],
    past_events = [],
    live_events = [],
    upcoming_workshops = [],
    past_workshops = [],
    live_workshops = [];

  // const eventSession = JSON.parse(sessionStorage.getItem("events"));
  // const workshopSession = JSON.parse(sessionStorage.getItem("workshops"));

  // let events = [];
  // if (eventSession === null) {
  //   fetch("https://gdsc-web-default-rtdb.firebaseio.com/Events.json")
  //     .then((res) => res.json())
  //     .then((data) => (events = data));
  //   sessionStorage.setItem("events", JSON.stringify(events));
  // } else events = eventSession;

  // let workshops = [];
  // if (workshopSession === null) {
  //   fetch("https://gdsc-web-default-rtdb.firebaseio.com/Events.json")
  //     .then((res) => res.json())
  //     .then((data) => (workshops = data));
  //   sessionStorage.setItem("workshops", JSON.stringify(workshops));
  // } else workshops = workshopSession;

  const curr_date = new Date();

  events.forEach((event) => {
    if (event) {
      const event_date = new Date(event.date);
      if (event_date.getTime() + 18060000 < curr_date.getTime())
        past_events.push(event);
      else if (event_date.getTime() + 18060000 > curr_date.getTime())
        upcoming_events.push(event);
      else live_events.push(event);
    }
  });

  workshops.forEach((workshop) => {
    if (workshop) {
      const workshop_date = new Date(workshop.date);
      if (workshop_date.getTime() + 18060000 < curr_date.getTime())
        past_workshops.push(workshop);
      else if (workshop_date.getTime() + 18060000 > curr_date.getTime())
        upcoming_workshops.push(workshop);
      else live_workshops.push(workshop);
    }
  });

  const upcoming_events_map = upcoming_events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  const past_events_map = past_events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  // const live_events_map = live_events.map((event, index) => (
  //   <EventCard key={event.id} event={event} />
  // ));

  const upcoming_workshops_map = upcoming_workshops.map((workshop) => (
    <WorkshopCard key={workshop.id} workshop={workshop} />
  ));

  const past_workshops_map = past_workshops.map((workshop) => (
    <WorkshopCard key={workshop.id} workshop={workshop} />
  ));

  // const live_workshops_map = live_workshops.map((workshop, index) => (
  //   <WorkshopCard key={workshop.id} workshop={workshop} />
  // ));

  const noUpcomingEvents =
    "There are no upcoming events at the moment. Please check again soon.";
  const noUpcomingWorkshops =
    "There are no upcoming workshops at the moment. Please check again soon.";

  const [eventSlider, setEventSlider] = useState(
    window.screen.width < 800 ? (
      <Slider {...settings}>
        {upcoming_events_map.length === 0 ? (
          <h5 className="text-center mt-1" data-aos="fade-up">
            {noUpcomingEvents}
          </h5>
        ) : (
          upcoming_events_map
        )}
      </Slider>
    ) : upcoming_events_map.length === 0 ? (
      <h5 className="text-center mt-1" data-aos="fade-up">
        {noUpcomingEvents}
      </h5>
    ) : (
      upcoming_events_map
    )
  );

  const [workshopSlider, setWorkshopSlider] = useState(
    window.screen.width < 800 ? (
      <Slider {...settings}>
        {upcoming_workshops_map.length === 0 ? (
          <Fade up>
            <h5 className="text-center mt-1">{noUpcomingWorkshops}</h5>
          </Fade>
        ) : (
          upcoming_workshops_map
        )}
      </Slider>
    ) : upcoming_workshops_map.length === 0 ? (
      <Fade up>
        <h5 className="text-center mt-1">{noUpcomingWorkshops}</h5>
      </Fade>
    ) : (
      upcoming_workshops_map
    )
  );

  const responsive = (media) => {
    if (media.matches) {
      setEventSlider(
        <Slider {...settings}>
          {upcoming_events_map.length === 0 ? (
            <h5 className="text-center mt-1" data-aos="fade-up">
              {noUpcomingEvents}
            </h5>
          ) : (
            upcoming_events_map
          )}
        </Slider>
      );
      setWorkshopSlider(
        <Slider {...settings}>
          {upcoming_workshops_map.length === 0 ? (
            <Fade up>
              <h5 className="text-center mt-1">{noUpcomingWorkshops}</h5>
            </Fade>
          ) : (
            upcoming_workshops_map
          )}
        </Slider>
      );
    } else {
      setEventSlider(
        upcoming_events_map.length === 0 ? (
          <h5 className="text-center mt-1" data-aos="fade-up">
            {noUpcomingEvents}
          </h5>
        ) : (
          upcoming_events_map
        )
      );
      setWorkshopSlider(
        upcoming_workshops_map.length === 0 ? (
          <Fade up>
            <h5 className="text-center mt-1">{noUpcomingWorkshops}</h5>
          </Fade>
        ) : (
          upcoming_workshops_map
        )
      );
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);

  const upcomingEventsClick = () => {
    setEventSlider(
      window.screen.width < 800 ? (
        <Slider {...settings}>
          {upcoming_events_map.length === 0 ? (
            <h5 className="text-center mt-1" data-aos="fade-up">
              {noUpcomingEvents}
            </h5>
          ) : (
            upcoming_events_map
          )}
        </Slider>
      ) : upcoming_events_map.length === 0 ? (
        <h5 className="text-center mt-1" data-aos="fade-up">
          {noUpcomingEvents}
        </h5>
      ) : (
        upcoming_events_map
      )
    );
  };

  const pastEventsClick = () => {
    setEventSlider(
      window.screen.width < 800 ? (
        <Slider {...settings}>{past_events_map}</Slider>
      ) : (
        past_events_map
      )
    );
  };

  const upcomingWorkshopsClick = () => {
    setWorkshopSlider(
      window.screen.width < 800 ? (
        <Slider {...settings}>
          {upcoming_workshops_map.length === 0 ? (
            <Fade up>
              <h5 className="text-center mt-1">{noUpcomingWorkshops}</h5>
            </Fade>
          ) : (
            upcoming_workshops_map
          )}
        </Slider>
      ) : upcoming_workshops_map.length === 0 ? (
        <Fade up>
          <h5 className="text-center mt-1">{noUpcomingWorkshops}</h5>
        </Fade>
      ) : (
        upcoming_workshops_map
      )
    );
  };

  const pastWorkshopsClick = () => {
    setWorkshopSlider(
      window.screen.width < 800 ? (
        <Slider {...settings}>{past_workshops_map}</Slider>
      ) : (
        past_workshops_map
      )
    );
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    eventIdea: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setValues((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const [submitBtn, setSubmitBtn] = useState(
    <button type="submit" className="btn- btn--primary">
      Submit
    </button>
  );

  const submitEventIdeaForm = async (event) => {
    event.preventDefault();
    const submitEventIdeaError = document.getElementById(
      "submitEventIdeaError"
    );
    const submitEventIdeaSuccess = document.getElementById(
      "submitEventIdeaSuccess"
    );
    if (
      values.name.length === 0 ||
      values.email.length === 0 ||
      values.eventIdea.length === 0
    ) {
      submitEventIdeaError.classList.remove("d-none");
    } else {
      setSubmitBtn(<div className="loader"></div>);

      const response = await fetch(
        "https://gdsc-web-default-rtdb.firebaseio.com/event_ideas.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            idea: values.eventIdea,
          }),
        }
      );
      console.log(response);

      emailjs
        .send(
          "service_qczueio",
          "template_0rti798",
          {
            to_name: "Prarthana Chandak",
            to_email: "prarthanachandak@gmail.com",
            from_name: "GDSC, AISSMS IOIT",
            name: values.name,
            email: values.email,
            eventIdea: values.eventIdea,
          },
          "user_N5oJI9nV7pdO3wXurZ08r"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setValues({
        name: "",
        email: "",
        eventIdea: "",
      });

      submitEventIdeaError.classList.add("d-none");
      submitEventIdeaSuccess.classList.remove("d-none");

      setSubmitBtn(
        <button type="submit" className="btn- btn--primary">
          Submit
        </button>
      );
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EVENTS - GDSC IOIT</title>
        <meta name="title" content="EVENTS GDSC - IOIT" />
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="gdsc, gdsc aissms, gdsc aissms ioit, dsc, dsc aissms, dsc aissms ioit, gdsc ioit, dsc ioit, ioit dsc, aissms dsc, aissms ioit dsc, aissms ioit gdsc, gdsc-aissms-ioit, gdsc-ioit, dsc-aissms-ioit, dsc-ioit"
        />
      </Helmet>
      <div className="container-fluid main">
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
          className="row pl-lg-5 mb-4"
        >
          <div id="Events">
            <span>Events</span>
            <span role="img" aria-label=""></span>
          </div>
        </div>
        <div className="row">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
            className="col-6 Upcoming"
          >
            <button
              id="Upcoming_Events_Span"
              className="custom-btn btn-13 Upcoming_Span"
              onClick={upcomingEventsClick}
            >
              <span>Upcoming Events</span>
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
            className="col-6 Past"
          >
            <button
              id="Past_Events_Span"
              className="custom-btn btn-14 Past_Span"
              onClick={pastEventsClick}
            >
              <span>Past Events</span>
            </button>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">{eventSlider}</div>
        </div>

        <Fade up>
          <div className="container text-center submit_event_idea">
            <span onClick={() => scrollToTop()} className="cta button">
              <span>Submit Event Idea</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </span>
          </div>
        </Fade>

        <div id="pop-up" className="pop-up">
          <div className="content">
            <div className="container">
              <div className="dots dots-div">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>

              <span className="close">
                <img width="20" height="20" src={CloseButton} alt="Close" />
              </span>

              <div className="title">
                <h1>Submit Your Event Idea</h1>
              </div>

              <h5 id="submitEventIdeaError" className="text-danger d-none">
                Please Enter Valid Data!
              </h5>
              <h5 id="submitEventIdeaSuccess" className="text-success d-none">
                Thank You. We’ll reach out to you if your submission fits our
                event guidelines.
              </h5>

              <img src={Gdsc_Logo} alt="GDSC LOGO" />

              <div className="subscribe">
                <h4>
                  All great things start with an idea. Submit this form if your
                  event idea can help the community!
                </h4>

                <form className="form mt-lg-5" onSubmit={submitEventIdeaForm}>
                  <input
                    type="text"
                    name="name"
                    className="form__field"
                    placeholder="Name"
                    value={values.name}
                    onChange={InputEvent}
                  />
                  <input
                    type="email"
                    name="email"
                    className="form__field mt-3"
                    placeholder="Email"
                    value={values.email}
                    onChange={InputEvent}
                  />
                  <textarea
                    className="form__field mt-3"
                    placeholder="Your Idea"
                    name="eventIdea"
                    value={values.eventIdea}
                    onChange={InputEvent}
                    rows="4"
                    cols="4"
                  ></textarea>

                  {submitBtn}
                </form>
              </div>
            </div>
          </div>
        </div>

        <Fade up>
          <div className="row workshops pl-lg-5 mb-4">
            <div id="Worshops">
              <span>Workshops</span>
              <span role="img" aria-label=""></span>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Fade up>
            <div className="col-6 Upcoming">
              <button
                id="Upcoming_Workshops_Span"
                className="custom-btn btn-13 Upcoming_Span Upcoming_Workshops_Span"
                onClick={upcomingWorkshopsClick}
              >
                <span>Upcoming Workshops</span>
              </button>
            </div>
          </Fade>

          <Fade up>
            <div className="col-6 Past">
              <button
                id="Past_Workshops_Span"
                className="custom-btn btn-14 Past_Span Past_Workshops_Span"
                onClick={pastWorkshopsClick}
              >
                <span>Past Workshops</span>
              </button>
            </div>
          </Fade>
        </div>

        <div className="container mt-5">
          <div className="row">{workshopSlider}</div>
        </div>
      </div>
    </>
  );
};

export default Event;
