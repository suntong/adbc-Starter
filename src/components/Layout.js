import React from "react";
import Routes from "./Routes";
import Header from "./Header";

export default () => {
  return (
    <div>
      <Header />
      <section>
        <Routes />
      </section>
    </div>
  );
};
