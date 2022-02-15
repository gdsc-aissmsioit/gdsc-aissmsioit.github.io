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
            content="Google Developer Student Clubs (GDSC), AISSMS Institute of Information Technology is ambitious towards building a community that aims to change the world with technology. We do this by organizing insightful events, hands-on workshops, interactive sessions, hackathons, study-jams and more. We believe in creating a peer-to-peer learning environment to grow together as a community."
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="gdsc, gdsc aissms, gdsc aissms ioit, dsc, dsc aissms, dsc aissms ioit, gdsc ioit, dsc ioit, ioit dsc, aissms dsc, aissms ioit dsc, aissms ioit gdsc, gdsc-aissms-ioit, gdsc-ioit, dsc-aissms-ioit, dsc-ioit"
          />
          <meta
            name="author"
            content="Google Developer Student Club | AISSMS Institute of Information Technology - Pune"
          />
          <meta
            name="publisher"
            content="Google Developer Student Club | AISSMS Institute of Information Technology - Pune"
          />
          <meta
            name="copyright"
            content="Google Developer Student Club | AISSMS Institute of Information Technology - Pune"
          />
          <meta name="audience" content="Everyone" />
          <meta
            name="google-site-verification"
            content="XXIh1Tg9IGcxhrp9ijmr6R_UaE5GObbtWmWf_Svr7P0"
          />
          <meta
            property="og:url"
            content="https://gdsc-aissmsioit.github.io/"
          />
          <meta
            property="og:title"
            content="AISSMS Institute of Information Technology - Pune | Google Developer Student Clubs"
          />
          <meta property="og:description" content="" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://gdsc-aissmsioit.github.io/" />
        </Helmet>
        <HashRouter>
          <Navbar />
          <App />
          <Footer />
        </HashRouter>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
