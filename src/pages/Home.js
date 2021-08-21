import React, { Component } from "react";
import { AddForm, FloatButton } from "../components";

class Home extends Component {
  render() {
    return (
      <div>
        Home
        {/* <FloatButton onClick={() => console.log("Button is working")} /> */}
        <AddForm />
      </div>
    );
  }
}

export { Home };
