import React, { Component } from "react";
import NavBar from "./component/NavBar";
import Items from "./component/items";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Items />
      </div>
    );
  }
}

export default App;
