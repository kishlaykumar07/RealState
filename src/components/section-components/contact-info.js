import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ContactInfo extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/10.png"}
                    alt="Icon Image"
                  />
                </div>
                <h3>Email Address</h3>
                <p>info@willowhomes.com.au</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/11.png"}
                    alt="Icon Image"
                  />
                </div>
                <h3>Phone Number</h3>
                <p>
                  08 7225 7911 (L),
                  <br /> 0435 087 911 (P)
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/12.png"}
                    alt="Icon Image"
                  />
                </div>
                <h3>Office Address</h3>
                <p>839-841 Main North Road, Pooraka SA 5095, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
