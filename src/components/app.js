import React, { Component } from "react";
import { Content } from "./content/content";

class App extends Component {
  render() {
    return (
      <Content
        header={<span>This is the header</span>}
        footer={<span>The Footer</span>}
      >
        <div>Someting</div>
        <div>Or Other</div>
      </Content>
    );
  }
}

export default App;
