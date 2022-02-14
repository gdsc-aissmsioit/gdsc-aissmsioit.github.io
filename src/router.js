import React from "react";
import { Switch, Route } from "react-router";

export default (
  <Switch>
    <Route path="/" />
    <Route path="/events/" />
    <Route path="/events/idea/:popup/" />
    <Route path="/events/:id/" />
    <Route path="/workshops/:id/" />
    <Route path="/blogs/" />
    <Route path="/blogs/:id/" />
    <Route path="/blogs/idea/:popup/" />
    <Route path="/team/" />
    <Route path="/team/:id/" />
    <Route path="/about/" />
    <Route path="/getintouch/" />
    <Route path="*" />
  </Switch>
);

