import React, { Component } from "react";
import Social from "../section-components/social";
import Copyright from "./copyright";

class Footer_v1 extends Component {
  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <img src={publicUrl + "assets/img/logo.png"} alt="Logo" />
                    </div>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    Willow Building Group is a building company based in
                    Adelaide, South Australia. We at Willow Building Group treat
                    each of our projects as a Jewel. We build homes by using
                    quality products and maintain high standard of workmanship.
                  </p>
                  <div className="ltn__social-media mt-20">
                    <Social />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 offset-lg-4 col-sm-6 col-12">
                <h3>Get In Touch</h3>
                <p>Address: 839-841 Main North Road, Pooraka SA 5095</p>
                <p>Phone: 08 7225 7911</p>
                <p>WhatsApp: 0435 087 911</p>
                <p>
                  Email:{" "}
                  <a href="mailto:example@example.com">
                    info@willowhomes.com.au
                  </a>
                </p>
                <p>Builder License Number: BLD296546</p>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    );
  }
}

export default Footer_v1;
