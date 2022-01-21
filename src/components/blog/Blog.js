import React, { useState } from "react";
import "./Blog.css";

import BlogCard from "./BlogCard";
import Blogs from "./blogs";

const Blog = () => {
  const technicalBlogs = [];
  const nonTechnicalBlogs = [];

  Blogs.forEach((blog) => {
    if (blog.category === "Technical") technicalBlogs.push(blog);
    else nonTechnicalBlogs.push(blog);
  });

  const noNonTechnicalBlogs =
    "There are no Non Technical Blogs at the moment. Please check again soon.";

  const technicalBlogsMap = technicalBlogs.map((blog) => (
    <BlogCard key={blog.id} blog={blog} />
  ));

  const [blogs, setBlogs] = useState(technicalBlogsMap);

  const technicalClick = () => {
    setBlogs(technicalBlogsMap);
  };

  const nonTechnicalClick = () => {
    if (nonTechnicalBlogs.length === 0) {
      setBlogs(
        <h5 className="text-center no_non_technical" data-aos="fade-up">
          {noNonTechnicalBlogs}
        </h5>
      );
    } else {
      setBlogs(
        nonTechnicalBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      );
    }
  };

  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor=".example-selector"
        data-aos-anchor-placement="top-center"
        className="row mt-1 pl-lg-5 ml-lg-2"
      >
        <div id="Events">
          <span>Blogs</span>
          <span role="img" aria-label=""></span>
        </div>
      </div>
      <div className="row">
        <div
          className="col-6 Upcoming"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
        >
          <button className="technical_btn red_btn" onClick={technicalClick}>
            Technical
          </button>
        </div>
        <div
          className="col-6 Past"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
        >
          <button
            className="technical_btn green_btn"
            onClick={nonTechnicalClick}
          >
            Non Technical
          </button>
        </div>
      </div>

      <div className="blog-container">{blogs}</div>
    </>
  );
};

export default Blog;
