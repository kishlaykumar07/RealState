import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const publicUrl = process.env.PUBLIC_URL + "/";

    const menuItems = [
      { name: "Home", link: "/#" },
      { name: "About", link: "/about" },
      { name: "Properties", link: "/Shop" },
      { name: "Contact Us", link: "/contact" },
    ];

    return (
      <div>
        <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
          <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                          <i className="icon-mail" /> info@willowhomes.com.au
                        </a>
                      </li>
                      <li>
                        <a href="locations.html">
                          <i className="icon-placeholder" /> 839-841 Main North
                          Road, Pooraka SA 5095, Australia
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="site-logo-wrap">
                    <div className="site-logo go-top">
                      <Link to="/">
                        <img
                          src={publicUrl + "assets/img/logo.png"}
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <div className="get-support clearfix d-none">
                      <div className="get-support-icon">
                        <i className="icon-call" />
                      </div>
                      <div className="get-support-info">
                        <h6>Get Support</h6>
                        <h4>
                          <a href="tel:08 7225 7911">08 7225 7911</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col header-menu-column">
                  <div className="header-menu d-none d-xl-block">
                    <nav>
                      <div className="ltn__main-menu">
                        <ul>
                          {menuItems.map((item, index) => (
                            <li key={index}>
                              <Link to={item.link}>{item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col--- ltn__header-options ltn__header-options-2 ">
                  <MobileMenuButton />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div
          id="ltn__utilize-mobile-menu"
          className="ltn__utilize ltn__utilize-mobile-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <Link to="/">
                  <img src={publicUrl + "assets/img/logo.png"} alt="Logo" />
                </Link>
              </div>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu">
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MobileMenuButton = () => (
  <div className="mobile-menu-toggle d-xl-none">
    <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
      <svg viewBox="0 0 800 600">
        <path
          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
          id="top"
        />
        <path d="M300,320 L540,320" id="middle" />
        <path
          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
          id="bottom"
          transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
        />
      </svg>
    </a>
  </div>
);

export default Navbar;
