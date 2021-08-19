import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Blog">
      <div role="main" className="main">
        <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
          <div className="container">
            <div className="row">
              <div className="col-md-12 align-self-center p-static order-2 text-center">
                <h1 className="text-dark font-weight-bold text-8">Grid 3 Columns</h1>
                <span className="sub-title text-dark">Check out our Latest News!</span>
              </div>
              <div className="col-md-12 align-self-center order-1">
                <ul className="breadcrumb d-block text-center">
                  <li><a href="#">Home</a></li>
                  <li className="active">Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-4">

          <div className="row">
            <div className="col">
              <div className="blog-posts">

                <div className="row">

                  <div className="col-md-4">
                    <article className="post post-medium border-0 pb-0 mb-5">
                      <div className="post-image">
                        <a href="blog-post.html">
                          <img src="img/blog/medium/blog-1.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                        </a>
                      </div>

                      <div className="post-content">

                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a href="blog-post.html">Amazing Mountain</a></h2>
                        <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        <div className="post-meta">
                          <span><i className="far fa-user"></i> By <a href="#">Bob Doe</a> </span>
                          <span><i className="far fa-folder"></i> <a href="#">News</a>, <a href="#">Design</a> </span>
                          <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                          <span className="d-block mt-2"><a href="blog-post.html" className="btn btn-xs btn-light text-1 text-uppercase">Read More</a></span>
                        </div>

                      </div>
                    </article>
                  </div>

                  <div className="col-md-4">
                    <article className="post post-medium border-0 pb-0 mb-5">
                      <div className="post-image">
                        <a href="blog-post.html">
                          <img src="img/blog/medium/blog-2.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                        </a>
                      </div>

                      <div className="post-content">

                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a href="blog-post.html">Creative Business</a></h2>
                        <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        <div className="post-meta">
                          <span><i className="far fa-user"></i> By <a href="#">John Doe</a> </span>
                          <span><i className="far fa-folder"></i> <a href="#">News</a>, <a href="#">Design</a> </span>
                          <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                          <span className="d-block mt-2"><a href="blog-post.html" className="btn btn-xs btn-light text-1 text-uppercase">Read More</a></span>
                        </div>

                      </div>
                    </article>
                  </div>

                  <div className="col-md-4">
                    <article className="post post-medium border-0 pb-0 mb-5">
                      <div className="post-image">
                        <a href="blog-post.html">
                          <img src="img/blog/medium/blog-3.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                        </a>
                      </div>

                      <div className="post-content">

                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a href="blog-post.html">Unlimited Ways</a></h2>
                        <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        <div className="post-meta">
                          <span><i className="far fa-user"></i> By <a href="#">John Doe</a> </span>
                          <span><i className="far fa-folder"></i> <a href="#">News</a>, <a href="#">Design</a> </span>
                          <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                          <span className="d-block mt-2"><a href="blog-post.html" className="btn btn-xs btn-light text-1 text-uppercase">Read More</a></span>
                        </div>

                      </div>
                    </article>
                  </div>

                  <div className="col-md-4">
                    <article className="post post-medium border-0 pb-0 mb-5">
                      <div className="post-image">
                        <a href="blog-post.html">
                          <img src="img/blog/medium/blog-4.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                        </a>
                      </div>

                      <div className="post-content">

                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a href="blog-post.html">Developer Life</a></h2>
                        <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        <div className="post-meta">
                          <span><i className="far fa-user"></i> By <a href="#">Jessica Doe</a> </span>
                          <span><i className="far fa-folder"></i> <a href="#">News</a>, <a href="#">Design</a> </span>
                          <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                          <span className="d-block mt-2"><a href="blog-post.html" className="btn btn-xs btn-light text-1 text-uppercase">Read More</a></span>
                        </div>

                      </div>
                    </article>
                  </div>

                  <div className="col-md-4">
                    <article className="post post-medium border-0 pb-0 mb-5">
                      <div className="post-image">
                        <a href="blog-post.html">
                          <img src="img/blog/medium/blog-5.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                        </a>
                      </div>

                      <div className="post-content">

                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a href="blog-post.html">The Blue Sky</a></h2>
                        <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        <div className="post-meta">
                          <span><i className="far fa-user"></i> By <a href="#">Robert Doe</a> </span>
                          <span><i className="far fa-folder"></i> <a href="#">News</a>, <a href="#">Design</a> </span>
                          <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                          <span className="d-block mt-2"><a href="blog-post.html" className="btn btn-xs btn-light text-1 text-uppercase">Read More</a></span>
                        </div>

                      </div>
                    </article>
                  </div>

                  <div className="col-md-4">
                    <article className="post post-medium border-0 pb-0 mb-5">
                      <div className="post-image">
                        <a href="blog-post.html">
                          <img src="img/blog/medium/blog-6.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                        </a>
                      </div>

                      <div className="post-content">

                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a href="blog-post.html">Night Life</a></h2>
                        <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        <div className="post-meta">
                          <span><i className="far fa-user"></i> By <a href="#">Robert Doe</a> </span>
                          <span><i className="far fa-folder"></i> <a href="#">News</a>, <a href="#">Design</a> </span>
                          <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                          <span className="d-block mt-2"><a href="blog-post.html" className="btn btn-xs btn-light text-1 text-uppercase">Read More</a></span>
                        </div>

                      </div>
                    </article>
                  </div>

                  <div className="col-md-4">
                    <article className="post post-medium border-0 pb-0 mb-5">
                      <div className="post-image">
                        <a href="blog-post.html">
                          <img src="img/blog/medium/blog-7.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                        </a>
                      </div>

                      <div className="post-content">

                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a href="blog-post.html">Another World Perspective</a></h2>
                        <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        <div className="post-meta">
                          <span><i className="far fa-user"></i> By <a href="#">John Doe</a> </span>
                          <span><i className="far fa-folder"></i> <a href="#">News</a>, <a href="#">Design</a> </span>
                          <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                          <span className="d-block mt-2"><a href="blog-post.html" className="btn btn-xs btn-light text-1 text-uppercase">Read More</a></span>
                        </div>

                      </div>
                    </article>
                  </div>

                  <div className="col-md-4">
                    <article className="post post-medium border-0 pb-0 mb-5">
                      <div className="post-image">
                        <a href="blog-post.html">
                          <img src="img/blog/medium/blog-8.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                        </a>
                      </div>

                      <div className="post-content">

                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a href="blog-post.html">The Creative Team</a></h2>
                        <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        <div className="post-meta">
                          <span><i className="far fa-user"></i> By <a href="#">Robert Doe</a> </span>
                          <span><i className="far fa-folder"></i> <a href="#">News</a>, <a href="#">Design</a> </span>
                          <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                          <span className="d-block mt-2"><a href="blog-post.html" className="btn btn-xs btn-light text-1 text-uppercase">Read More</a></span>
                        </div>

                      </div>
                    </article>
                  </div>

                  <div className="col-md-4">
                    <article className="post post-medium border-0 pb-0 mb-5">
                      <div className="post-image">
                        <a href="blog-post.html">
                          <img src="img/blog/medium/blog-9.jpg" className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" />
                        </a>
                      </div>

                      <div className="post-content">

                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a href="blog-post.html">Alone on the Forest</a></h2>
                        <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        <div className="post-meta">
                          <span><i className="far fa-user"></i> By <a href="#">John Doe</a> </span>
                          <span><i className="far fa-folder"></i> <a href="#">News</a>, <a href="#">Design</a> </span>
                          <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                          <span className="d-block mt-2"><a href="blog-post.html" className="btn btn-xs btn-light text-1 text-uppercase">Read More</a></span>
                        </div>

                      </div>
                    </article>
                  </div>

                </div>

                <div className="row">
                  <div className="col">
                    <ul className="pagination float-end">
                      <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-left"></i></a></li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-right"></i></a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </Layout>
  )
}

export default IndexPage