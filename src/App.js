import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import React, { useEffect, useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Team from "./components/team/Team";
import Event from "./components/events/Event";
import Eventdetails from "./components/events/Eventdetails";
import Workshopdetails from "./components/events/Workshopdetails";
import Blog from "./components/blog/Blog";
import Blogdetails from "./components/blog/Blogdetails";
import GetInTouch from "./components/getintouch/GetInTouch";
import Error from "./components/error/Error";
import Community from "./components/community/Community";

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

import { Helmet } from "react-helmet";

const App = () => {
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
    <>
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
          <meta name="google-site-verification" content="0xRiG-n146B-0JyL40YxOjPw3MBW2cPULE5NLDJGSBQ" />
        </Helmet>
        <HashRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/events/" exact component={() => <Event />} />
            <Route
              path="/events/idea/:popup/"
              exact
              component={() => <Event />}
            />
            <Route
              path="/events/:id/"
              exact
              component={() => <Eventdetails />}
            />
            <Route
              path="/workshops/:id/"
              exact
              component={() => <Workshopdetails />}
            />
            <Route path="/blogs/" exact component={() => <Blog />} />
            <Route path="/blogs/:id/" exact component={() => <Blogdetails />} />
            <Route
              path="/blogs/idea/:popup/"
              exact
              component={() => <Blog />}
            />
            <Route path="/team/" exact component={() => <Team />} />
            <Route path="/team/:id/" exact component={() => <Team />} />
            <Route path="/about/" exact component={() => <Community />} />
            <Route path="/getintouch/" exact component={() => <GetInTouch />} />
            <Route path="/web/" component={Home} />
            <Route path="*" exact component={Error} />
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    </>
  );
};

export default App;
