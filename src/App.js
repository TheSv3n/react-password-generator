import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Titlebar from "./Components/Titlebar";
import PassGenForm from "./Components/PassGenForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Titlebar />
        <PassGenForm />
      </React.Fragment>
    );
  }
}

export default App;
