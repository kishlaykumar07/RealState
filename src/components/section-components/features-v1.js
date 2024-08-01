import React, { Component } from "react";
import { Link } from "react-router-dom";

class FeaturesV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    let customClass = this.props.customClass ? this.props.customClass : "";

    return (
      <div className={customClass}>
        <div className="container">
          <div className="row ltn__custom-gutter--- justify-content-center go-top">
            <div className="col-lg-2 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="properties_img">
                  <img
                    src={publicUrl + "assets/img/icons/icon-img/21.png"}
                    alt="#"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h6>
                    <Link to="/Shop">Homes & Lands</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="properties_img">
                  <img
                    src={publicUrl + "assets/img/icons/icon-img/21.png"}
                    alt="#"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h6>
                    <Link to="/Shop">Dual Key Homes</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="properties_img">
                  <img
                    src={publicUrl + "assets/img/icons/icon-img/21.png"}
                    alt="#"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h6>
                    <Link to="/Shop">NDIS HOMES</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="properties_img">
                  <img
                    src={publicUrl + "assets/img/icons/icon-img/21.png"}
                    alt="#"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h6>
                    <Link to="/Shop">Land</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="properties_img">
                  <img
                    src={publicUrl + "assets/img/icons/icon-img/21.png"}
                    alt="#"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h6>
                    <Link to="/Shop">ONE PART CONTRACT</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesV1;
