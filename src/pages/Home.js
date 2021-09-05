import React, { Component } from "react";
import { AddForm} from "../components";
import SecondForm from "../components/SecondForm";

class Home extends Component {
  render() {
    return (
      <div>
        Home
     
        <AddForm />
        <SecondForm />
      </div>
    );
  }
}

export { Home };
