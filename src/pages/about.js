import * as React from "react";
import Layout from "../components/layout";
import { aboutDetail } from "../data/about";

const { name, title, description, subDescription, contactActions } = aboutDetail;

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div role="main" className="main">
        <div className="container pt-5">
          <div className="row py-4 mb-2">
            <div className="col-md-7 order-2">
              <div className="overflow-hidden">
                <h2
                  className="text-color-dark font-weight-bold text-12 mb-2 pt-0 mt-0 appear-animation"
                  data-appear-animation="maskUp"
                  data-appear-animation-delay="300"
                >
                  { name }
                </h2>
              </div>
              <div className="overflow-hidden mb-3">
                <p
                  className="font-weight-bold text-primary text-uppercase mb-0 appear-animation"
                  data-appear-animation="maskUp"
                  data-appear-animation-delay="500"
                >
                  { title }
                </p>
              </div>
              <p
                className="lead appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="700"
              >
                { description }
              </p>
              <p
                className="pb-3 appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="800"
              >
                { subDescription }
              </p>
              <hr
                className="solid my-4 appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="900"
              ></hr>
              <div
                className="row align-items-center appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="1000"
              >
                <div className="col-lg-6">
                  <a href="#" className="btn btn-modern btn-dark mt-3">
                    Get In Touch
                  </a>
                  <a href="#" className="btn btn-modern btn-primary mt-3">
                    Hire Me
                  </a>
                </div>
                <div className="col-sm-6 text-lg-end my-4 my-lg-0">
                  <strong className="text-uppercase text-1 me-3 text-dark">
                    follow me
                  </strong>
                  <ul className="social-icons float-lg-end">
                    <li className="social-icons-facebook">
                      <a
                        href="http://www.facebook.com/"
                        target="_blank"
                        title="Facebook"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="social-icons-twitter">
                      <a
                        href="http://www.twitter.com/"
                        target="_blank"
                        title="Twitter"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-icons-linkedin">
                      <a
                        href="http://www.linkedin.com/"
                        target="_blank"
                        title="Linkedin"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 order-md-2 mb-4 mb-lg-0 appear-animation"
              data-appear-animation="fadeInRightShorter"
            >
              <img
                src="img/team/team-7.jpg"
                className="img-fluid mb-2"
                alt=""
              ></img>
            </div>
          </div>
        </div>


        <div className="container pt-5 pb-2">
          <div className="overflow-hidden">
            <h2
              className="text-color-dark font-weight-normal text-6 mb-0 appear-animation"
              data-appear-animation="maskUp"
            >
              <strong className="font-weight-extra-bold">Projects</strong>
            </h2>
          </div>
          <div className="overflow-hidden mb-3">
            <p
              className="mb-0 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay="200"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit massa
              enim. Nullam id varius nunc.
            </p>
          </div>
          <div className="row">
            <div className="col">
              <div
                className="my-4 lightbox appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-plugin-options="{'delegate': 'a.lightbox-portfolio', 'type': 'image', 'gallery': {'enabled': true}}"
              >
                <div
                  className="owl-carousel owl-theme pb-3"
                  data-plugin-options="{'items': 4, 'margin': 35, 'loop': false}"
                >
                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Presentation
                          </span>
                          <span className="thumb-info-type">Brand</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project-1.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Porto Watch
                          </span>
                          <span className="thumb-info-type">Media</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project-1.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project-2.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Identity
                          </span>
                          <span className="thumb-info-type">Logo</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project-2.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project-27.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Porto Screens
                          </span>
                          <span className="thumb-info-type">Website</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project-27.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project-4.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Three Bottles
                          </span>
                          <span className="thumb-info-type">Logo</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project-4.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project-5.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Company T-Shirt
                          </span>
                          <span className="thumb-info-type">Brand</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project-5.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project-6.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Mobile Mockup
                          </span>
                          <span className="thumb-info-type">Website</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project-6.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project-7.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Porto Label
                          </span>
                          <span className="thumb-info-type">Media</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project-7.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project-23.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Business Folders
                          </span>
                          <span className="thumb-info-type">Logo</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project-23.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project-24.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Tablet Screen
                          </span>
                          <span className="thumb-info-type">Website</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project-24.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project-25.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Black Watch
                          </span>
                          <span className="thumb-info-type">Media</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project-25.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="portfolio-item">
                    <span className="thumb-info thumb-info-lighten thumb-info-no-borders thumb-info-bottom-info thumb-info-centered-icons border-radius-0">
                      <span className="thumb-info-wrapper border-radius-0">
                        <img
                          src="img/projects/project-26.jpg"
                          className="img-fluid border-radius-0"
                          alt=""
                        ></img>
                        <span className="thumb-info-title">
                          <span className="thumb-info-inner line-height-1 font-weight-bold text-dark position-relative top-3">
                            Monitor Mockup
                          </span>
                          <span className="thumb-info-type">Website</span>
                        </span>
                        <span className="thumb-info-action">
                          <a href="portfolio-single-wide-slider.html">
                            <span className="thumb-info-action-icon thumb-info-action-icon-primary">
                              <i className="fas fa-link"></i>
                            </span>
                          </a>
                          <a
                            href="img/projects/project-26.jpg"
                            className="lightbox-portfolio"
                          >
                            <span className="thumb-info-action-icon thumb-info-action-icon-light">
                              <i className="fas fa-search text-dark"></i>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/jquery.appear/jquery.appear.min.js"></script>
      <script src="vendor/jquery.easing/jquery.easing.min.js"></script>
      <script src="vendor/jquery.cookie/jquery.cookie.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="vendor/jquery.validation/jquery.validate.min.js"></script>
      <script src="vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
      <script src="vendor/jquery.gmap/jquery.gmap.min.js"></script>
      <script src="vendor/lazysizes/lazysizes.min.js"></script>
      <script src="vendor/isotope/jquery.isotope.min.js"></script>
      <script src="vendor/owl.carousel/owl.carousel.min.js"></script>
      <script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
      <script src="vendor/vide/jquery.vide.min.js"></script>
      <script src="vendor/vivus/vivus.min.js"></script>
    </Layout>
  );
};

export default AboutPage;
