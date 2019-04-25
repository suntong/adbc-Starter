import React from "react";
import { BrowserRouter as Router, browserHistory } from "react-router-dom";
import Layout from "./Layout";

export default props => (
  <Router history={browserHistory}>
    <Layout />
  </Router>
);
