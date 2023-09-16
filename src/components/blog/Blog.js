import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";

import BlogCard from "./BlogCard";
import Blogs from "./blogs";

import Fade from "react-reveal/Fade";

import CloseButton from "../../images/event/close.png";

import emailjs from "@emailjs/browser";

import Leads from "../home/Leads";

import { scrollToTop } from "../footer/ScrollToTop";

import { Helmet } from "react-helmet";

const Blog = () => {
  const { popup } = useParams();

  const technicalBlogs = [];
  const nonTechnicalBlogs = [];

  const [values, setValues] = useState({
    name: "",
    email: "",
    domain: "",
    title: "",
    coverImage: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const popUp = document.getElementById("popup");
    const submitblogbtn = document.getElementById("submitblogBtn");
    const close = document.getElementsByClassName("close")[0];

    submitblogbtn.addEventListener("click", () => {
      popUp.classList.add("open");
      popUp.style.display = "block";
    });

    close.addEventListener("click", () => {
      popUp.classList.remove("open");

      setTimeout(() => {
        popUp.style.display = "none";
      }, 1000);

      setSubmitBlog({
        success: "",
        error: "",
      });
    });

    if (popup === "popup") popUp.classList.add("open");
  }, [popup]);

  Blogs.forEach((blog) => {
    if (blog.category === "Technical") technicalBlogs.push(blog);
    else nonTechnicalBlogs.push(blog);
  });

  const noNonTechnicalBlogs =
    "There are no Non Technical Blogs at the moment. Please check again soon.";

  let technicalBlogsMap = technicalBlogs.map((blog) => (
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

  const [submitBlog, setSubmitBlog] = useState({
    error: "",
    success: "",
  });

  const [submitBtn, setSubmitBtn] = useState(
    <button type="submit" className="btn- btn--primary">
      Submit
    </button>
  );

  const submitBlogForm = async (event) => {
    event.preventDefault(); // Prevents default refresh by the browser
    if (
      values.name.length === 0 ||
      values.email.length === 0 ||
      values.title.length === 0 ||
      values.coverImage.length === 0 ||
      values.content.length === 0
    ) {
      setSubmitBlog({ ...submitBlog, error: "Please Enter Valid Data!" });
    } else {
      const domains = [
        "web",
        "blockchain",
        "cloud",
        "dsa/cp",
        "android",
        "ai/ml",
        "general",
      ];
      const domainIndex = domains.indexOf(values.domain.toLowerCase());

      if (domainIndex === -1) {
        setSubmitBlog({
          ...submitBlogForm,
          error: "Please Select Valid Domain!",
        });
      } else {
        setSubmitBtn(<div className="loader"></div>);

        const leads = [Leads[0], Leads[domainIndex + 1]];

        leads.forEach((lead) => {
          lead["from_name"] = "GDSC, AISSMS IOIT";
          lead["name"] = values.name;
          lead["email"] = values.email;
          lead["title"] = values.title;
          lead["domain"] = values.domain;
          lead["coverImage"] = values.coverImage;
          lead["content"] = values.content;

          emailjs
            .send(
              "service_yz4z5pu",
              "template_47x941g",
              lead,
              "zrb8Cvq2f4tMi6CKX"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
        });

        setValues({
          name: "",
          email: "",
          domain: "",
          title: "",
          coverImage: "",
          content: "",
        });

        setSubmitBlog({
          success: `We appreciate your submission. Your blog will be published soon after our team evaluates it.
          `,
          error: "",
        });

        setSubmitBtn(
          <button type="submit" className="btn- btn--primary">
            Submit
          </button>
        );
      }
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs - GDSC</title>
        <meta name="title" content="Blogs - GDSC" />
        <meta
          name="description"
          content="Learn about the latest technologies and happening in the IT
                industry. Head to the page now to learn something new today."
        />
        <meta
          name="keywords"
          content="gdsc blogs, gdsc aissms blogs, gdsc aissms ioit blogs, dsc, dsc aissms blogs, dsc aissms ioit blogs, gdsc ioit blogs, dsc ioit blogs, ioit dsc blogs, aissms dsc blogs, aissms ioit dsc blogs, aissms ioit gdsc blogs, gdsc-aissms-ioit blogs, gdsc-ioit blogs, dsc-aissms-ioit blogs, dsc-ioit blogs"
        />
      </Helmet>
      <div
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor=".example-selector"
        data-aos-anchor-placement="top-center"
        className="row mt-1 pl-lg-5 ml-lg-2"
      >
        <div
          id="Events"
          className="mb-33 blogs_heading"
          style={{ marginBottom: "33px" }}
        >
          <span>Blogs</span>
          <span role="img" aria-label=""></span>
        </div>
      </div>
      <div className="row" style={{ marginBottom: " 64px" }}>
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

      <Fade up>
        <button
          onClick={() => scrollToTop()}
          id="submitblogBtn"
          className="cta text-center submitblogbtn mt-5"
        >
          <span className="submitblog-btn">Submit Your Blog</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </Fade>

      <div id="popup" className="pop-up popup">
        <div className="content -content">
          <div className="container">
            <div className="dots dots-div">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>

            <span className="close">
              <img src={CloseButton} width="20" height="20" alt="Close" />
            </span>

            <div className="title">
              <h1>Submit Your Blog</h1>
            </div>

            <div className="subscribe">
              <h4>Inspire the community by writing a blog!</h4>
              <h5 className="text-danger mt-4">{submitBlog.error}</h5>
              <h5 className="text-success mt-4 mx-lg-2 px-lg-5 px-1">
                {submitBlog.success}
              </h5>

              <form
                className="form mt-lg-5 home_form"
                onSubmit={submitBlogForm}
              >
                <input
                  type="text"
                  name="name"
                  className="form__field form__fields"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  className="form__field form__fields"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                <select
                  className="form__field domain_select"
                  aria-label="Default select example"
                  name="domain"
                  value={values.domain}
                  onChange={handleChange}
                >
                  <option>Domain</option>
                  <option value="web">Web</option>
                  <option value="blockchain">Blockchain</option>
                  <option value="cloud">Cloud</option>
                  <option value="ai/ml">AI/ML</option>
                  <option value="dsa/cp">DSA/CP</option>
                  <option value="android">Android</option>
                  <option value="general">General</option>
                </select>
                <input
                  type="text"
                  name="title"
                  className="form__field form__fields"
                  placeholder="Title"
                  value={values.title}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="coverImage"
                  className="form__field form__fields"
                  placeholder="Cover Image Link"
                  value={values.coverImage}
                  onChange={handleChange}
                />
                <textarea
                  className="form__field form__fields"
                  name="content"
                  placeholder="Content"
                  rows="5"
                  cols="6"
                  value={values.content}
                  onChange={handleChange}
                ></textarea>

                {submitBtn}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
