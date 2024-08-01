import React, { Component } from "react";

class BannerV3 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__slider-area ltn__slider-3  section-bg-2">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          {/* ltn__slide-item */}
          <div
            className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60"
            data-bs-bg={publicUrl + "assets/img/slider/11.jpg"}
          >
            <div className="ltn__slide-item-inner text-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-11 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50 d-none">
                          <i className="fa fa-play" />
                        </div>
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>{" "}
                          Willow Building Group
                        </h6>
                        <h1 className="slide-title animated ">
                          Find Your Dream <br /> Properties With Us
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          <div
            className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60"
            data-bs-bg={publicUrl + "assets/img/slider/11.jpg"}
          >
            <div className="ltn__slide-item-inner  text-right text-end">
              <div className="container">
                <div className="row">
                  <div className="col-lg-11 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>{" "}
                          Willow Building Group
                        </h6>
                        <h1 className="slide-title animated ">
                          Find Your Dream <br /> House By Us
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          <div
            className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60"
            data-bs-bg={publicUrl + "assets/img/slider/11.jpg"}
          >
            <div className="ltn__slide-item-inner  text-left">
              <div className="container">
                <div className="row">
                  <div className="col-lg-11 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>{" "}
                          Willow Building Group
                        </h6>
                        <h1 className="slide-title animated ">
                          Find Your Dream <br /> House By Us
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    );
  }
}

export default BannerV3;
