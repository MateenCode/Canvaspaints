import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Img from "react-image";
import "../css/Main.scss";

import Edit from "../assets/icon/edit.svg";
import Upload from "../assets/icon/upload.svg";
import Rotate from "../assets/icon/rotate.svg";
import Save from "../assets/icon/save.svg";
import Cloud from "../assets/icon/upload.png";
import Gear from "../assets/icon/gear.svg";

export default function Main(props) {
  return (
    <div className="main">
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Edit Size</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.toggle}>Cancel</Button>
          <span className="modal_btn" onClick={props.toggle}>
            Do Something
          </span>
        </ModalFooter>
      </Modal>

      <div className="wrapper_box">
        <div className="img_box left">
          <img src={Edit} alt="n/a" className="img_svg edit" />
          <p className="text edit_text">EDIT</p>
        </div>
        <div className="img_box" onClick={props.upload}>
          <img src={Upload} alt="n/a" className="img_svg" />
          <p className="text">UPLOAD</p>
        </div>
        <div className="img_box" onClick={props.handleRotate}>
          <img src={Rotate} alt="n/a" className="img_svg" />
          <p className="text">ROTATE</p>
        </div>
        <div className="img_box">
          <img src={Save} alt="n/a" className="img_svg" />
          <p className="text">SAVE</p>
        </div>
      </div>

      <span className="edit_size" onClick={props.toggle}>
        <img src={Gear} alt="n/a" className="img_gear" />
        <p className="gear_text mt-2">EDIT</p>
        <p className="gear_text">SIZE</p>
      </span>

      {props.showDefault ? (
        <div className="display">
          <div className="cloud_display">
            <img
              onClick={props.upload}
              className="cloud_img"
              src={Cloud}
              alt="n/a"
            />
            <p className="text_header">Click To Upload Image</p>
            <p className="text_sub">Accepted file types .jpg, .png, .gif</p>
          </div>
        </div>
      ) : (
        <div
          className="display"
          style={{
            transform: `rotate(${props.rotation}deg)`
          }}
        >
          <Img
            className="current_img"
            src={props.currentImage}
            loader={
              <div className="spinner text-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            }
          />
        </div>
      )}
    </div>
  );
}
