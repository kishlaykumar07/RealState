import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ShopDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__shop-details-area pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                <div className="ltn__blog-meta"></div>
                <h1>Diamond Manor Apartment</h1>
                <label>
                  <span className="ltn__secondary-color">
                    <i className="flaticon-pin" />
                  </span>{" "}
                  Belmont Gardens, Chicago
                </label>
                <h4 className="title-2">Description</h4>
                <p>
                  Massa tempor nec feugiat nisl pretium. Egestas fringilla
                  phasellus faucibus scelerisque eleifend donec Porta nibh
                  venenatis cras sed felis eget velit aliquet. Neque volutpat ac
                  tincidunt vitae semper quis lectus. Turpis in eu mi bibendum
                  neque egestas congue quisque. Sed elementum tempus egestas sed
                  sed risus pretium quam. Dignissim sodales ut eu sem. Nibh
                  mauris cursus mattis molestee iaculis at erat pellentesque. Id
                  interdum velit laoreet id donec ultrices tincidunt.
                </p>
                <p>
                  To the left is the modern kitchen with central island, leading
                  through to the unique breakfast family room which feature
                  glass walls and doors out onto the garden and access to the
                  separate utility room.
                </p>
                <h4 className="title-2">Property Detail</h4>
                <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                  <ul>
                    <li>
                      <label>Property ID:</label> <span>HZ29</span>
                    </li>
                    <li>
                      <label>Home Area: </label> <span>120 sqft</span>
                    </li>
                    <li>
                      <label>Rooms:</label> <span>7</span>
                    </li>
                    <li>
                      <label>Baths:</label> <span>2</span>
                    </li>
                    <li>
                      <label>Year built:</label> <span>1992</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <label>Lot Area:</label> <span>HZ29 </span>
                    </li>
                    <li>
                      <label>Lot dimensions:</label> <span>120 sqft</span>
                    </li>
                    <li>
                      <label>Beds:</label> <span>7</span>
                    </li>
                    <li>
                      <label>Price:</label> <span>2</span>
                    </li>
                    <li>
                      <label>Property Status:</label> <span>For Sale</span>
                    </li>
                  </ul>
                </div>
                <h4 className="title-2">From Our Gallery</h4>
                <div className="ltn__property-details-gallery mb-30">
                  <div className="row">
                    <div className="col-md-6">
                      <a
                        href={publicUrl + "assets/img/others/14.jpg"}
                        data-rel="lightcase:myCollection"
                      >
                        <img
                          className="mb-30"
                          src={publicUrl + "assets/img/others/14.jpg"}
                          alt="Image"
                        />
                      </a>
                      <a
                        href={publicUrl + "assets/img/others/15.jpg"}
                        data-rel="lightcase:myCollection"
                      >
                        <img
                          className="mb-30"
                          src={publicUrl + "assets/img/others/15.jpg"}
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a
                        href={publicUrl + "assets/img/others/16.jpg"}
                        data-rel="lightcase:myCollection"
                      >
                        <img
                          className="mb-30"
                          src={publicUrl + "assets/img/others/16.jpg"}
                          alt="Image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <h4 className="title-2 mb-10">Amenities</h4>
                <div className="property-details-amenities mb-60">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="ltn__menu-widget">
                        <ul>
                          <li>
                            <label className="checkbox-item">
                              Air Conditioning
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Gym
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Microwave
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Swimming Pool
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              WiFi
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="ltn__menu-widget">
                        <ul>
                          <li>
                            <label className="checkbox-item">
                              Barbeque
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Recreation
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Microwave
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Basketball Cout
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Fireplace
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="ltn__menu-widget">
                        <ul>
                          <li>
                            <label className="checkbox-item">
                              Refrigerator
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Window Coverings
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Washer
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              24x7 Security
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Indoor Game
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="title-2">Location</h4>
                <div className="property-details-google-map mb-60">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
                <h4 className="title-2">Floor Plans</h4>
                {/* APARTMENTS PLAN AREA START */}
                <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
                  <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
                    <div className="nav">
                      <a data-bs-toggle="tab" href="#liton_tab_3_1">
                        First Floor
                      </a>
                      <a
                        className="active show"
                        data-bs-toggle="tab"
                        href="#liton_tab_3_2"
                      >
                        Second Floor
                      </a>
                      <a data-bs-toggle="tab" href="#liton_tab_3_3">
                        Third Floor
                      </a>
                      <a data-bs-toggle="tab" href="#liton_tab_3_4">
                        Top Garden
                      </a>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade" id="liton_tab_3_1">
                      <div className="ltn__apartments-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="apartments-plan-img">
                              <img
                                src={publicUrl + "assets/img/others/10.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                              <h2>First Floor</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="product-details-apartments-info-list  section-bg-1">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Total Area</label>{" "}
                                        <span>2800 Sq. Ft</span>
                                      </li>
                                      <li>
                                        <label>Bedroom</label>{" "}
                                        <span>150 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Belcony/Pets</label>{" "}
                                        <span>Allowed</span>
                                      </li>
                                      <li>
                                        <label>Lounge</label>{" "}
                                        <span>650 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade active show"
                      id="liton_tab_3_2"
                    >
                      <div className="ltn__product-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="apartments-plan-img">
                              <img
                                src={publicUrl + "assets/img/others/10.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                              <h2>Second Floor</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="product-details-apartments-info-list  section-bg-1">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Total Area</label>{" "}
                                        <span>2800 Sq. Ft</span>
                                      </li>
                                      <li>
                                        <label>Bedroom</label>{" "}
                                        <span>150 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Belcony/Pets</label>{" "}
                                        <span>Allowed</span>
                                      </li>
                                      <li>
                                        <label>Lounge</label>{" "}
                                        <span>650 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="liton_tab_3_3">
                      <div className="ltn__product-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="apartments-plan-img">
                              <img
                                src={publicUrl + "assets/img/others/10.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                              <h2>Third Floor</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="product-details-apartments-info-list  section-bg-1">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Total Area</label>{" "}
                                        <span>2800 Sq. Ft</span>
                                      </li>
                                      <li>
                                        <label>Bedroom</label>{" "}
                                        <span>150 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Belcony/Pets</label>{" "}
                                        <span>Allowed</span>
                                      </li>
                                      <li>
                                        <label>Lounge</label>{" "}
                                        <span>650 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="liton_tab_3_4">
                      <div className="ltn__product-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="apartments-plan-img">
                              <img
                                src={publicUrl + "assets/img/others/10.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                              <h2>Top Garden</h2>
                              <p>
                                Enimad minim veniam quis nostrud exercitation
                                ullamco laboris. Lorem ipsum dolor sit amet cons
                                aetetur adipisicing elit sedo eiusmod
                                tempor.Incididunt labore et dolore magna aliqua.
                                sed ayd minim veniam.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="product-details-apartments-info-list  section-bg-1">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Total Area</label>{" "}
                                        <span>2800 Sq. Ft</span>
                                      </li>
                                      <li>
                                        <label>Bedroom</label>{" "}
                                        <span>150 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="apartments-info-list apartments-info-list-color mt-40---">
                                    <ul>
                                      <li>
                                        <label>Belcony/Pets</label>{" "}
                                        <span>Allowed</span>
                                      </li>
                                      <li>
                                        <label>Lounge</label>{" "}
                                        <span>650 Sq. Ft</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* APARTMENTS PLAN AREA END */}
                <h4 className="title-2">Property Video</h4>
                {/* <div
                  className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                  data-bs-bg={publicUrl + "assets/img/others/5.jpg"}
                >
                  <i className="fa fa-play" />
                </div> */}
                <h4 className="title-2">Related Properties</h4>
                <div className="row">
                  {/* ltn__product-item */}
                  <div className="col-xl-6 col-sm-6 col-12 go-top">
                    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                      <div className="product-img">
                        <Link to="/shop">
                          <img
                            src={publicUrl + "assets/img/product-3/1.jpg"}
                            alt="#"
                          />
                        </Link>
                        <div className="real-estate-agent">
                          <div className="agent-img">
                            <Link to="/team-details">
                              <img
                                src={publicUrl + "assets/img/blog/author.jpg"}
                                alt="#"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-badge">
                          <ul>
                            <li className="Rent-badg">For Sale</li>
                          </ul>
                        </div>
                        <h2 className="product-title">
                          <Link to="/shop">New Apartment Nice View</Link>
                        </h2>
                        <div className="product-img-location">
                          <ul>
                            <li>
                              <Link to="/shop">
                                <i className="flaticon-pin" /> Belmont Gardens,
                                Chicago
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                          <li>
                            <span>3 </span>
                            Bedrooms
                          </li>
                          <li>
                            <span>2 </span>
                            Bathrooms
                          </li>
                          <li>
                            <span>3450 </span>
                            square Ft
                          </li>
                        </ul>
                        <div className="product-hover-action">
                          <ul>
                            <li>
                              <a
                                href="#"
                                title="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#quick_view_modal"
                              >
                                <i className="flaticon-expand" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Wishlist"
                                data-bs-toggle="modal"
                                data-bs-target="#liton_wishlist_modal"
                              >
                                <i className="flaticon-heart-1" />
                              </a>
                            </li>
                            <li>
                              <Link to="/shop" title="Compare">
                                <i className="flaticon-add" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-info-bottom">
                        <div className="product-price">
                          <span>
                            $349,00<label>/Month</label>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ltn__product-item */}
                  <div className="col-xl-6 col-sm-6 col-12 go-top">
                    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                      <div className="product-img">
                        <Link to="/shop">
                          <img
                            src={publicUrl + "assets/img/product-3/2.jpg"}
                            alt="#"
                          />
                        </Link>
                        <div className="real-estate-agent">
                          <div className="agent-img">
                            <Link to="/team-details">
                              <img
                                src={publicUrl + "assets/img/blog/author.jpg"}
                                alt="#"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-badge">
                          <ul>
                            <li className="Rent-badg">For Sale</li>
                          </ul>
                        </div>
                        <h2 className="product-title">
                          <Link to="/shop">New Apartment Nice View</Link>
                        </h2>
                        <div className="product-img-location">
                          <ul>
                            <li>
                              <Link to="/shop">
                                <i className="flaticon-pin" /> Belmont Gardens,
                                Chicago
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                          <li>
                            <span>3 </span>
                            Bedrooms
                          </li>
                          <li>
                            <span>2 </span>
                            Bathrooms
                          </li>
                          <li>
                            <span>3450 </span>
                            square Ft
                          </li>
                        </ul>
                        <div className="product-hover-action">
                          <ul>
                            <li>
                              <a
                                href="#"
                                title="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#quick_view_modal"
                              >
                                <i className="flaticon-expand" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Wishlist"
                                data-bs-toggle="modal"
                                data-bs-target="#liton_wishlist_modal"
                              >
                                <i className="flaticon-heart-1" />
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-details.html" title="Compare">
                                <i className="flaticon-add" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-info-bottom">
                        <div className="product-price">
                          <span>
                            $349,00<label>/Month</label>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                {/* Author Widget */}
                <div className="widget ltn__author-widget">
                  <div className="ltn__author-widget-inner text-center">
                    <img
                      src={publicUrl + "assets/img/team/4.jpg"}
                      alt="Image"
                    />
                    <h5>Willow Building Group</h5>
                    <div className="footer-address">
                      <ul>
                        <li>
                          <div className="footer-address-icon">
                            <i className="icon-placeholder" />
                          </div>
                          <div className="footer-address-info">
                            <p>839-841 Main North Road, Pooraka SA 5095</p>
                          </div>
                        </li>
                        <li>
                          <div className="footer-address-icon">
                            <i className="icon-call" />
                          </div>
                          <div className="footer-address-info">
                            <p>
                              <a href="tel:08 7225 7911">08 7225 7911</a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="footer-address-icon">
                            <i className="icon-mail" />
                          </div>
                          <div className="footer-address-info">
                            <p>
                              <a href="mailto:example@example.com">
                                info@willowhomes.com.au
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Banner Widget */}
                {/* Form Widget */}
                <div className="widget ltn__form-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Enquiry
                  </h4>
                  <form action="#">
                    <input
                      type="text"
                      name="yourname"
                      placeholder="Your Name*"
                    />
                    <input
                      type="text"
                      name="youremail"
                      placeholder="Your e-Mail*"
                    />
                    <textarea
                      name="yourmessage"
                      placeholder="Write Message..."
                      defaultValue={""}
                    />
                    <button type="submit" className="btn theme-btn-1">
                      Send Messege
                    </button>
                  </form>
                </div>
                <div className="widget ltn__banner-widget d-none go-top">
                  <Link to="/shop">
                    <img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopDetails;
