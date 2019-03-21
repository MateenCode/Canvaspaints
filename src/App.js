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
4. 'Upload' buttons display img ✔️
5. img updating asynch ✔️
6. transition affect with rotation 
*/

class App extends Component {
  state = {
    currentImage: undefined,
    showDefault: true,
    modal: false,
    rotation: 0
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleRotate = () => {
    if (!this.state.showDefault) {
      let newRotation = this.state.rotation + 90;
      if (newRotation >= 360) {
        newRotation = -360;
      }
      this.setState({
        rotation: newRotation
      });
    }
  };

  upload = async () => {
    const api_call = await fetch("https://source.unsplash.com/random");
    const image = await api_call;

    this.setState({
      currentImage: image.url
    });

    this.setState({
      showDefault: false
    });
  };

  render() {
    const { rotation, modal, showDefault, currentImage } = this.state;
    return (
      <div className="App">
        <Header />
        <Main
          handleRotate={this.handleRotate}
          currentImage={currentImage}
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
