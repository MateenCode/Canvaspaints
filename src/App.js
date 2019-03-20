import React, { Component } from "react";
import "./css/App.scss";

// components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

/* 
1. hamburger toggle navlinks ✔️
2. Edit Size present overlay ✔️
3. Rotate flip aspect ratio ✔️
4. 'Upload' buttons display img 
*/

class App extends Component {
  state = {
    modal: false,
    rotation: 0,
    showDefault: true
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleRotate = () => {
    let newRotation = this.state.rotation + 90;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    this.setState({
      rotation: newRotation
    });
  };

  upload = () => {
    this.setState(prevState => ({
      showDefault: !prevState.showDefault
    }));
  };

  render() {
    const { rotation, modal, showDefault } = this.state;
    return (
      <div className="App">
        <Header />
        <Main
          handleRotate={this.handleRotate}
          showDefault={showDefault}
          toggle={this.toggle}
          upload={this.upload}
          rotation={rotation}
          modal={modal}
        />
        <Footer upload={this.upload} />
      </div>
    );
  }
}

export default App;
