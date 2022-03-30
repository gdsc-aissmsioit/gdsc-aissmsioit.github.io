import React from "react";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../footer/ScrollToTop";

import Fade from "react-reveal/Fade";

const BlogCard = ({ blog }) => {
  return (
    <>
      <div className="blog-card">
        <Fade left>
          <div className="card__header">
            <div className="card-image ">
              <NavLink onClick={scrollToTop} to={`/blogs/${blog.id}/`}>
                <img
                  src={blog.imageSrc}
                  alt="Blog_Image"
                  className="card__image"
                  width="600"
                />
              </NavLink>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="card_main">
            <div className="card__body">
              <span
                className={
                  "tag " +
                  (blog.tag === "Cloud"
                    ? "tag-blue"
                    : blog.tag === "Andriod"
                    ? "tag-brown"
                    : blog.tag === "Web"
                    ? "tag-green"
                    : blog.tag === "Machine Learning"
                    ? "tag-red"
                    : "tag-blue")
                }
              >
                {blog.tag}
              </span>
              <NavLink onClick={scrollToTop} to={`/blogs/${blog.id}/`}>
                <h4>{blog.name}</h4>
              </NavLink>
              <span className="author-name">
                {blog.author.replace(":", ",").split("-")[0]}
              </span>

              <p>
                {blog.shortDescription.substr(0, 500)}
                <NavLink
                  className="text-primary"
                  onClick={scrollToTop}
                  to={`/blogs/${blog.id}/`}
                >
                  ....Read More
                </NavLink>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default BlogCard;
