import React from "react";
import "../css/Main.scss";

import Edit from "../assets/icon/edit.svg";
import Upload from "../assets/icon/upload.svg";
import Rotate from "../assets/icon/rotate.svg";
import Save from "../assets/icon/save.svg";
import Cloud from "../assets/icon/upload.png";
import Gear from "../assets/icon/gear.svg";

export default function Main() {
  return (
    <div className="main">
      <div className="wrapper_box">
        <div className="img_box left">
          <img src={Edit} alt="n/a" className="img_svg edit" />
          <p className="text edit_text">EDIT</p>
        </div>
        <div className="img_box">
          <img src={Upload} alt="n/a" className="img_svg" />
          <p className="text">UPLOAD</p>
        </div>
        <div className="img_box">
          <img src={Rotate} alt="n/a" className="img_svg" />
          <p className="text">ROTATE</p>
        </div>
        <div className="img_box">
          <img src={Save} alt="n/a" className="img_svg" />
          <p className="text">SAVE</p>
        </div>
      </div>
      <span className="edit_size">
        <img src={Gear} alt="n/a" className="img_gear" />
        <p className="gear_text mt-2">EDIT</p>
        <p className="gear_text">SIZE</p>
      </span>

      <div className="display">
        <div className="cloud_display">
          <img className="cloud_img" src={Cloud} alt="n/a" />
          <p className="text_header">Click To Upload Image</p>
          <p className="text_sub">Accepted file types .jpg, .png, .gif</p>
        </div>
      </div>
    </div>
  );
}
