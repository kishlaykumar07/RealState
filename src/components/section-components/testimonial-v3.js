import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class TestimonialV3 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div
        className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70"
        data-bs-bg={publicUrl + "assets/img/bg/20.jpg"}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Our Testimonial
                </h6>
                <h1 className="section-title">Clients Feedback</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7">
                <div className="ltn__testimoni-info">
                  <p style={{ textAlign: "justify" }}>
                    <i className="flaticon-left-quote-1" />
                    I would really recommend everyone for services from Willows homes Pty Ltd. If you’re looking for a reliable, trustworthy and motivated team to build up your dream home, u should definitely visit to the team for best services. The team is efficient and works in effective ways to make ur dream homeland in ur desired way and
                  </p>
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      <img 
                        src={publicUrl + "assets/img/testimonial/1.jpg"}
                        alt="#"
                      />
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>David Josan</h5>
                      <label></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7">
                <div className="ltn__testimoni-info">
                <p style={{ textAlign: "justify" }}>
                    <i className="flaticon-left-quote-1" />
                    Exceptional experience with Willow Homes!From start to finish,their professionalism,attention to detail, and timely completion surpassed expectations. The team's communication and craftsmanship were outstanding. Highly recommend for top-notch building and construction services. Will definitely choose them for future projects.
                  </p>
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      <img
                        src={publicUrl + "assets/img/testimonial/2.jpg"}
                        alt="#"
                      />
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>Harman Gill</h5>
                      <label></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7">
                <div className="ltn__testimoni-info">
                <p style={{ textAlign: "justify" }}>
                    <i className="flaticon-left-quote-1" />
                    Fantastic experience with Willow Homes! They offered a full suite of services and excellent communication throughout the entire lifecycle of the project. We could not be happier with the final product. Their staff was available everyday and always gave us varities of ideas, keeping in mind our budget. It is exactly what we wanted! Highly recommend!
                  </p>
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      <img
                        src={publicUrl + "assets/img/testimonial/3.jpg"}
                        alt="#"
                      />
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>Ronnie Ron</h5>
                      <label></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialV3;
