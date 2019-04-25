import React from "react";
import { Link, withRouter } from "react-router-dom";

@withRouter
export default class extends React.Component {
  static displayName = "Header";
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    document.title = "hehe";
  }

  render() {
    return (
      <div>
        <Link to="/a">aaaa </Link>
        <Link to="/b">bbbb </Link>
        <Link to="/">dddd </Link>
      </div>
    );
  }
}
