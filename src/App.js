import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import React from "react";
import Home from "./components/home/Home";
import Team from "./components/team/Team";
import Event from "./components/events/Event";
import Eventdetails from "./components/events/Eventdetails";
import Workshopdetails from "./components/events/Workshopdetails";
import Blog from "./components/blog/Blog";
import Blogdetails from "./components/blog/Blogdetails";
import LeadApplication from "./components/blog/LeadApplication";
import GetInTouch from "./components/getintouch/GetInTouch";
import Error from "./components/error/Error";
import Community from "./components/community/Community";

import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <Home />} />
      <Route path="/events/" exact component={() => <Event />} />
      <Route path="/events/idea/:popup/" exact component={() => <Event />} />
      <Route path="/events/:id/" exact component={() => <Eventdetails />} />
      <Route
        path="/workshops/:id/"
        exact
        component={() => <Workshopdetails />}
      />
      <Route path="/blogs/" exact component={() => <Blog />} />
      <Route path="/blogs/leadguide_by_prarthanachandak/" exact component={() => <LeadApplication />} />
      <Route path="/blogs/:id/" exact component={() => <Blogdetails />} />
      <Route path="/blogs/idea/:popup/" exact component={() => <Blog />} />
      <Route path="/team/" exact component={() => <Team />} />
      <Route path="/team/:id/" exact component={() => <Team />} />
      <Route path="/about/" exact component={() => <Community />} />
      <Route path="/getintouch/" exact component={() => <GetInTouch />} />
      <Route path="/web/" component={Home} />
      <Route path="*" exact component={Error} />
    </Switch>
  );
};

export default App;
