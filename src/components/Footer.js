import React from "react";
import "../css/Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <span className="upload_btn pt-2 pb-2 mt-3 mr-3">UPLOAD</span>
      <span className="price_container">
        <p className="final_price">$17.60</p>
        <p className="total_price">$135.35</p>
      </span>
    </div>
  );
}
