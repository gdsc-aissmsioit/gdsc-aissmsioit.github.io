import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App";
import "./index.css";

import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const [loaderDisplay, setLoaderDisplay] = useState("");
  const [contentDisplay, setContentDisplay] = useState("d-none");

  setTimeout(() => {
    setLoaderDisplay("d-none");
    setContentDisplay("");
  }, 5000);

  return (
    <React.Fragment>
      <div className={loaderDisplay}>
        <div className="artboard">
          <div className="domino">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={contentDisplay}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>GDSC - AISSMS IOIT</title>
          <meta name="title" content="GDSC - AISSMS IOIT" />
          <meta
            name="description"
            content="Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. If you love to code and develop, you're at the right place. Students from all departmental backgrounds are welcome to the world of Tech! Here, you can sharpen your skills through our technical sessions, hands-on workshops and project building activities. We'll be working together as a team to build inspiring solutions to tackle real-world problems. Let us begin this journey of learning and growing together as a community!"
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="gdsc, gdsc aissms, gdsc aissms ioit, dsc, dsc aissms, dsc aissms ioit, gdsc ioit, dsc ioit, ioit dsc, aissms dsc, aissms ioit dsc, aissms ioit gdsc, gdsc-aissms-ioit, gdsc-ioit, dsc-aissms-ioit, dsc-ioit"
          />
          <meta
            name="author"
            content="Google Developer Student Club - AISSMS IOIT"
          />
          <meta
            name="publisher"
            content="Google Developer Student Club - AISSMS IOIT"
          />
          <meta
            name="copyright"
            content="Google Developer Student Club - AISSMS IOIT"
          />
          <meta name="audience" content="Everyone" />
          <meta
            name="google-site-verification"
            content="0xRiG-n146B-0JyL40YxOjPw3MBW2cPULE5NLDJGSBQ"
          />
        </Helmet>
        <HashRouter>
          <Navbar />
            <App />
          <Footer />
        </HashRouter>
      </div>
    </ React.Fragment>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
