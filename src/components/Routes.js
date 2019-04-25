import React from "react";
import { Route, Switch } from "react-router-dom";
import FormUploader from "./Uploader";
import ModalTest from "./ModalTest";
import ChartTest from "./Chart";

export default () => {
  return (
    <Switch>
      <Route path="/a" component={FormUploader} />
      <Route path="/b" component={ChartTest} location={{ title: "b" }} />
      <Route component={ModalTest} />
    </Switch>
  );
};
