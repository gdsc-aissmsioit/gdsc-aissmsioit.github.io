import React from "react";
import { useParams } from "react-router-dom";

import blogs from "./blogs";

import "./Blogdetails.css";

import { Helmet } from "react-helmet";

const Blogdetails = () => {
  const { id } = useParams();
  const blog = blogs[id];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Details - GDG</title>
        <meta name="title" content="Blog Details - GDG" />
        <meta name="description" content={blog.shortDescription} />
        <meta
          name="keywords"
          content="gdsc blogs details, gdsc aissms blogs details, gdsc aissms ioit blogs details, dsc, dsc aissms blogs details, dsc aissms ioit blogs details, gdsc ioit blogs details, dsc ioit blogs details, ioit dsc blogs details, aissms dsc blogs details, aissms ioit dsc blogs details, aissms ioit gdsc blogs details, gdsc-aissms-ioit blogs details, gdsc-ioit blogs details, dsc-aissms-ioit blogs details, dsc-ioit blogs details"
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
          <span>Blog Details</span>
        </div>
      </div>

      <div className="events-container">
        <div className="blogs-card">
          <div
            className="events-header blogs-header"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <a
              title="Blog Image"
              target="_blank"
              rel="noreferrer"
              href={blog.BlogLink}
            >
              <img
                src={blog.imageSrc}
                alt="Events_Image"
                className="events-image blogs-image"
              />
            </a>
          </div>

          <div
            className="blogs-main"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <>
              <div className="blog-post-content max-width-2 m-auto my-2 m-auto">
                <h1 className="font1">{blog.name}</h1>
                <div className="blogpost-meta">
                  <div className="author-info">
                    <div>
                      <b>{`Author - ${blog.author}`}</b>
                    </div>
                    <div> {`${blog.date} | ${blog.read} read`}</div>
                  </div>
                  <div className="social">
                    <a
                      href={`mailto:${blog.email}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mr-3"
                      title="Mail"
                    >
                      <i className="fa fa-envelope blog-mail"></i>
                    </a>
                    <a
                      href={blog.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      title="LinkedIn"
                    >
                      <i className="fa fa-linkedin ico-link"></i>
                    </a>
                  </div>
                </div>
                <div className="font1">{blog.about}</div>
                <div className="font1">{blog.resources}</div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogdetails;
