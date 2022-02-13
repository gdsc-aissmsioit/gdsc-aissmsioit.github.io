import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";

import Home_Svg from "../../images/home/Home.gif";

import Bubbles from "../bubbles/Bubbles";

import Fade from "react-reveal/Fade";

import upcoming from "./upcoming";

import { scrollToTop } from "../footer/ScrollToTop";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      numCounter("members", 785, 1);
      numCounter("organizers", 20, 100);
      numCounter("events", 13, 200);
      numCounter("projects", 2, 1000);
    }, 1000);
  }, []);

  const numCounter = (tagId, maxCount, speed) => {
    var initialNumber = 0;
    setInterval(() => {
      if (initialNumber < maxCount) {
        initialNumber++;
        const tagid = document.getElementById(tagId);
        if (tagid) tagid.innerText = initialNumber;
      }
    }, speed);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  let upcoming_events = [];

  const curr_date = new Date();

  upcoming.forEach((event) => {
    const event_date = new Date(event.date);
    if (event_date.getTime() + 18060000 > curr_date.getTime())
      // 157237218
      upcoming_events.push(event);
  });

  const noUpcomingEvents =
    "There are no upcoming events at the moment. Please check again soon.";

  const upcoming_events_map = upcoming_events.map((event) => (
    <Card key={event.id} event={event} />
  ));

  const [eventSlider, setEventSlider] = useState(
    window.screen.width < 800 ? (
      <Slider {...settings}>
        {upcoming_events_map.length === 0 ? (
          <Fade up>
            <h5 className="text-center mb-5">{noUpcomingEvents}</h5>
          </Fade>
        ) : (
          upcoming_events_map
        )}
      </Slider>
    ) : upcoming_events_map.length === 0 ? (
      <Fade up>
        <h5 className="text-center mb-5">{noUpcomingEvents}</h5>
      </Fade>
    ) : (
      upcoming_events_map
    )
  );

  const responsive = (media) => {
    if (media.matches) {
      setEventSlider(
        <Slider {...settings}>
          {upcoming_events_map.length === 0 ? (
            <Fade up>
              <h5 className="text-center mb-5">{noUpcomingEvents}</h5>
            </Fade>
          ) : (
            upcoming_events_map
          )}
        </Slider>
      );
    } else {
      setEventSlider(
        upcoming_events_map.length === 0 ? (
          <Fade up>
            <h5 className="text-center mb-5">{noUpcomingEvents}</h5>
          </Fade>
        ) : (
          upcoming_events_map
        )
      );
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);

  return (
    <div className="container-fluid home">
      <div className="contents">
        <div className="row">
          <div
            className="column home-svg mt-lg-4"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <img className="cursor-pointer" src={Home_Svg} alt="Home_Svg" />
          </div>
          <div
            className="column mt-lg-1"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <div className="heading-text">
              <div className="text-center">
                <h2 className="animate-character">
                  Google Developer Student Clubs
                </h2>
              </div>
            </div>

            <p className="member-description">
              If you love to code and develop, you are welcome to the world of
              Google Developer Technologies! Here, you can sharpen your skills
              through our technical sessions, hands-on workshops and project
              building activities. We'll be working together as a team to build
              inspiring solutions to tackle real-world problems. Let us begin
              this journey of learning and growing together as a community!
            </p>
            <ul>
              <li className="content-item">
                <button className="other-btns">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="other-btns-link"
                    href="https://gdsc.community.dev/aissms-institute-of-information-technology-pune/"
                  >
                    Be a Member
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Fade up>
          <div className="container d-flex align-items-center justify-content-center mt-5">
            <div className="all-divs mt-lg-5">
              <h1 className="text-center home-headings mt-lg-5">
                Upcoming Events And Workshops
              </h1>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="container events mt-2 mt-lg-5">{eventSlider}</div>
        </Fade>

        <div className="container text-center mb-5">
          <NavLink onClick={scrollToTop} to="/events/idea/popup/">
            <span className="cta button">
              <span>Submit Event Idea</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </span>
          </NavLink>
        </div>

        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <Fade up>
          <section id="counts" className="counts">
            <div className="container">
              <div className="row counters">
                <div className="col-lg-3 col-6 text-center">
                  <span id="members">0</span>
                  <p>Members</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span id="organizers">0</span>
                  <p>Organizers</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span id="events">0</span>
                  <p>Events</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span id="projects">0</span>
                  <p>Workshops</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>

        <div className="container gdsc-revolve">
          <Fade up>
            <h1 className="text-center about-home-headings home-headings mt-lg-0 mt-5">
              GDSC Revolves Around
            </h1>
          </Fade>

          <div className="row stacks pl-lg-5 pr-lg-5 ml-lg-5 mr-lg-5">
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button ml-domain">Machine Learning</span>
              </div>
            </Fade>
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button web-domain">Web Development</span>
              </div>
            </Fade>
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button android-domain">
                  Android Development
                </span>
              </div>
            </Fade>
          </div>

          <div className="row stacks pl-lg-5 pr-lg-5 ml-lg-5 mr-lg-5">
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button ai-domain">
                  Artificial Intelligence
                </span>
              </div>
            </Fade>
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button cloud-domain">Cloud Computing</span>
              </div>
            </Fade>
            <Fade up>
              <div className="col-lg-4 col-sm-12 stack-name">
                <span className="-button dsacp-domain">DSA / CP</span>
              </div>
            </Fade>
          </div>
        </div>

        <Fade up>
          <div className="container d-flex align-items-center justify-content-center mt-lg-5 mt-sm-4">
            <div className="all-divs text-center mt-lg-5">
              <Fade up>
                <h1 className="text-center team-home-headings home-headings mt-lg-0">
                  Meet Our GDSC Lead
                </h1>
              </Fade>

              <Fade up>
                <div id="gdsc_lead" className="row">
                  <div className="col-lg-12 col-sm-12 member-body">
                    <img
                      src="https://i.ibb.co/QbYjh69/Prarthana-Chandak.jpg"
                      className="img-fluid lead-img"
                      alt="Lead_Image"
                    />
                    <h5>Prarthana Chandak</h5>
                    <span></span>
                    <div className="social-ico m-0">
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
                        href="https://www.instagram.com/prarthanachandak"
                      >
                        <i className="fa fa-instagram ico-insta"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/prarthanachandak"
                      >
                        <i className="fa fa-github ico-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>

              <div className="btn-section">
                <button className="other-btns">
                  <NavLink
                    className="other-btns-link"
                    onClick={scrollToTop}
                    to="/team"
                  >
                    Meet our Team
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="container d-flex align-items-center justify-content-center">
            <div className="all-divs">
              <Fade up>
                <h1 className="text-center about-home-headings home-headings mt-lg-0">
                  About Community
                </h1>
              </Fade>

              <p className="text-center px-lg-5">
                GDSC community thrives to spread awareness about technolgies and
                engage students in multiple events so that they grow as a
                developer and meet like minded people.
              </p>
              <div className="btn-section">
                <button className="other-btns">
                  <NavLink
                    className="other-btns-link"
                    onClick={scrollToTop}
                    to="/about"
                  >
                    Check Out
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="container d-flex align-items-center justify-content-center">
            <div className="all-divs">
              <Fade up>
                <h1 className="text-center home-headings">Blogs</h1>
              </Fade>

              <p className="text-center px-lg-5">
                Learn about the latest technologies and happening in the IT
                industry. Head to the page now to learn something new today.
              </p>
              <div className="btn-section">
                <button className="other-btns">
                  <NavLink
                    onClick={scrollToTop}
                    to="/blogs"
                    className="other-btns-link"
                  >
                    Check Out
                  </NavLink>
                </button>

                <div className="container text-center mt-5">
                  <NavLink onClick={scrollToTop} to="/blogs/idea/popup/">
                    <span className="cta button">
                      <span>Submit Your Blog</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade up>
          <div className="container d-flex align-items-center justify-content-center">
            <div className="all-divs">
              <Fade up>
                <h1 className="text-center about-home-headings home-headings mt-4">
                  We Value Our Sponsors
                </h1>
              </Fade>

              <p className="text-center">
                <img
                  className="sponser-img"
                  src="https://res.cloudinary.com/dqf1zqrr9/image/upload/v1644751901/blogs/techm_pmpipl.png"
                  alt="sponser_img"
                />
                <br />
                <p className="tech-mahindra pt-0">
                  Tech Mahindra represents the connected world, offering
                  innovation &amp; human-centric technology experiences to their
                  customers, stakeholders &amp; communities.
                </p>
              </p>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="container d-flex align-items-center justify-content-center mt-5">
            <div className="all-divs col-lg-6">
              <h1 className="text-center home-headings mt-4">Stay Updated</h1>
              <p className="text-center px-lg-5">
                Don’t miss out on the latest happenings happening in GDSC AISSMS
                IOIT, Pune. RSVP below to get updates about the latest workshops
                and events to be conducted by us.
              </p>
              <div className="btn-section mb-0">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://gdsc.community.dev/aissms-institute-of-information-technology-pune/"
                >
                  <button className="other-btns">Join With Us</button>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <Bubbles />
    </div>
  );
};

export default Home;
