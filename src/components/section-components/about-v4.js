import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class AboutV4 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__about-us-area pt-120 pb-90 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <h1 className="section-title">Willow Building Group</h1>
                </div>
                <ul>
                  <p>
                    Willow Building Group is a reputable construction company
                    known for its commitment to quality craftsmanship and
                    personalized home building solutions. With a strong emphasis
                    on customer satisfaction, Willow Building Group creates
                    dream residences that reflect both style and functionality.
                  </p>
                </ul>
                <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-2" />
                    Accredited
                  </li>
                  <li>
                    <i className="flaticon-mountain" />
                    Modern Approach
                  </li>
                  <li>
                    <i className="flaticon-heart" />
                    Happy Clients
                  </li>
                  <li>
                    <i className="flaticon-secure" />
                    Complete 24/7 Security
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-right">
                <img
                  src={publicUrl + "assets/img/others/9.png"}
                  alt="About Us Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutV4;
