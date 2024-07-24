import React, { Component } from "react";
import { Link } from "react-router-dom";

class FeaturesV1 extends Component {
  render() {
    const publicUrl = process.env.PUBLIC_URL + "/";
    const { customClass = "" } = this.props;

    const categories = [
      { title: "Home and Land Packages", img: "2.jpg", link: "/shop" },
      { title: "Dual Key Homes", img: "2.jpg", link: "/shop" },
      { title: "NDIS Homes", img: "2.jpg", link: "/shop" },
      { title: "Land for Sale", img: "2.jpg", link: "/shop" },
      { title: "Residential Properties", img: "2.jpg", link: "/shop" },
    ];

    return (
      <div
        id="properties-section"
        className={`ltn__banner-area pt-120 go-top ${customClass}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Property
                </h6>
                <h1 className="section-title">Property By Categories</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`col-lg-${index === 0 ? "8" : "4"} col-md-6`}
              >
                <div
                  className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
                  data-bs-bg={publicUrl + `assets/img/gallery/${category.img}`}
                >
                  <div className="ltn__banner-info">
                    <h3>
                      <Link to={category.link}> {category.title} </Link>
                    </h3>
                    <p> Great Deals Available</p>
                    <mark> 13 Listings</mark>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesV1;
