import React, { Component } from "react";
import "./css/App.scss";

// components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

/* 
1. hamburger should toggle 
2. Edit Size present an overlay 
*/

class App extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main toggle={this.toggle} modal={this.state.modal} />
        <Footer />
      </div>
    );
  }
}

export default App;
