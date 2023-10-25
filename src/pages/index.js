import * as React from "react"
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Slider from "react-slick";
import CountUp from 'react-countup';
import Seo from '../components/seo'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import pImage1 from "../images/project-img-1.jpg"
import headingIcon from "../images/heading-icon.png"
import certificates from "../images/certificates.jpg";
import AboutOne from "../images/about-image-1.jpg"
import AboutTwo from "../images/about-image-2.jpg"

import Layout from '../components/layout';

class IndexPage extends React.Component {
  render() {
    const sliders = this.props.data.allContentfulHomeSlider.edges;
    const projectsData = this.props.data.allContentfulProjects.edges;
    const clientsData = this.props.data.allContentfulClients.edges;
    const testimonialsData = this.props.data.allContentfulTestimonials.edges;
    const homeServicesData = this.props.data.allContentfulHomeServices.edges;
    const statisticsData = this.props.data.allContentfulStatistics.edges;
    const aboutusData = this.props.data.allContentfulAboutDetail.edges;
    
    const seoDetail = this.props.data.allContentfulSeo.edges;
    const seoTitle = seoDetail[0].node.title;
    const seoDesc = seoDetail[0].node.detail.detail;
    const keywords = seoDetail[0].node.keywords || '';


    const banner_settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      useCSS: false,
      dots: false,
      adaptiveHeight: false,
      nextArrow: <i ><FontAwesomeIcon style={{ paddingTop: '50px', paddingLeft: '30px', fontSize: '20px' }} icon={faAnglesRight} /></i>,
      prevArrow: <i><FontAwesomeIcon style={{ paddingTop: '50px', paddingLeft: '30px', fontSize: '20px' }} icon={faAnglesLeft} /></i>
    };


    const project_settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    const clientSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 800, // Adjust breakpoint
          settings: {
            slidesToShow: 3, // Adjust the number of items to show
          },
        },
        {
          breakpoint: 1000, // Adjust breakpoint
          settings: {
            slidesToShow: 4, // Adjust the number of items to show
          },
        },
      ],

    };
    const testimonialSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,

    };
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { gatsbyImage, description } = node.data.target
          return (
            <GatsbyImage
              image={getImage(gatsbyImage)}
              alt={description}
            />
          )
        },
      },
    };
    return (
      <>
      <Seo
          title={seoTitle}
          description={seoDesc}
          keywords={keywords}
        />
      
      <Layout>
        
        {/* -----------------------------------
        ---------------------------------------
         Banner 
         ------------------------------
         ------------------------------------*/}
        <section className="featured-slider-one" >
          <div className="containe">
            <Slider {...banner_settings}>

              {sliders.map((slide) => {
                return (
                  <div className="f-slider-layer" key={slide.node.id}>
                    <img alt={slide.node.title} src={slide.node.image.url} />
                    <div className="f-slider-one-data">
                      <h1>{slide.node.title}</h1>
                      {slide.node.detail && slide.node.detail.raw && renderRichText(slide.node.detail, options)}
                    </div>
                  </div>
                );
              })}


            </Slider>

          </div>
        </section>
        {/* -----------------------------------
        ---------------------------------------
         Services 
         ------------------------------
         ------------------------------------*/}
        <section className="gap service-style-one">
          <div className="container">
            <div className="row">

              {homeServicesData.map((homeService) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 text-center" key={homeService.node.id}>
                    <div className="service-data">
                      <div className="svg-icon d-flex-all">
                        <img className="light-icon" src={homeService.node.icon.url} alt="Icon" />
                        <img className="dark-icon" src={homeService.node.iconForDarkBg.url} alt="Icon" />

                      </div>
                      <h3>
                        <a href="#">{homeService.node.title}</a>
                      </h3>
                      {homeService.node.detail && homeService.node.detail.raw && renderRichText(homeService.node.detail, options)}
                      {/*<a className="icon" href="#">
                      <FontAwesomeIcon icon={faAnglesRight} />
                      </a>*/}
                    </div>
                  </div>



                );
              })}





            </div>
          </div>
        </section>
        {/* -----------------------------------
        ---------------------------------------
         About 
         ------------------------------
         ------------------------------------*/}
        <section class="gap no-top about-style-one">
          <div class="container">
          {aboutusData.map((aboutus) => {
                return (
                  <div class="row">
              <div class="col-lg-6" >
                <div class="about-data-left">
                  <figure>
                    <img src={aboutus.node.imageLarge.url} alt="About One" />
                  </figure>
                  <figure class="about-image">
                    <img src={aboutus.node.imageSmall.url} alt="About Two" />
                  </figure>
                </div>
              </div>
              <div class="col-lg-6" >
                <div class="about-data-right">
                  <span>{aboutus.node.subtitle}</span>
                  <h2>{aboutus.node.title}</h2>
                  <div class="about-info">
                    {aboutus.node.sortDetail && aboutus.node.sortDetail.raw && renderRichText(aboutus.node.sortDetail, options)}
                    <a href="/about_us/" class="theme-btn theme-btn-in-white">Read More <i class="fa-solid fa-angles-right"><FontAwesomeIcon icon={faAnglesRight} /></i></a>
                  </div>
                </div>
              </div>
            </div>
           
                  
                );
              })}


            
          </div>
        </section>
        {/* -----------------------------------
        ---------------------------------------
         Counter 
         ------------------------------
         ------------------------------------*/}
        <section class="gap no-top counter-style-one">
          <div class="container">
            <div class="row">
            {statisticsData.map((statistic, index) => {
    const isEvenIndex = index % 2 === 0;
    const counterDataClasses = `counter-data ${isEvenIndex ? 'upper-space' : ''}`;

    return (
      <div class="col-lg-4 col-md-6 col-sm-12" key={index}>
        <div class={counterDataClasses}>
          <div class="count">
            <span class="counter"><CountUp delay={1} end={statistic.node.number} /></span>{statistic.node.numberText}<i>{statistic.node.value}</i>
          </div>
          <h4>{statistic.node.title}</h4>
        </div>
      </div>
    );
  })}



              
            </div>
          </div>
        </section>
        {/* -----------------------------------
        ---------------------------------------
         Projects 
         ------------------------------
         ------------------------------------*/}
        <section className="gap project-style-one light-bg-color">
          <div className="heading">
            <figure>
              <img src={headingIcon} alt="Heading Icon" />
            </figure>
            <span>Company Projects</span>
            <h2>Projects Completed</h2>
          </div>
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="project-slider owl-carousel">

                  <Slider {...project_settings}>

                    {projectsData.map((post) => {
                      return (

                        <div className="project-slider-box" key={post.node.id}>
                          <div className="project-post">
                            <figure><img src={post.node.image.url} alt={post.node.title} /></figure>
                            <div className="project-data">

                              <h3>{post.node.title}</h3>
                              {post.node.sortDetail.sortDetail}
                              {/* <Link to={`/${post.node.slug}`} className="project-icon" ><FontAwesomeIcon icon={faAnglesRight} /></Link> */}
                            </div>
                          </div>
                        </div>

                      );
                    })}



                  </Slider>
                </div>

              </div>

            </div>
          </div>
        </section>
        {/* -----------------------------------
        ---------------------------------------
         Clients 
         ------------------------------
         ------------------------------------*/}
        <section className="gap  client-style-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

                <div className="client-slider owl-carousel overflow-hidden">
                  <Slider {...clientSettings}>
                    {clientsData.map((client) => {
                      return (
                        <img
                          className="w-auto m-auto"
                          src={client.node.logo.url}
                          alt="client-3"
                        />

                      );
                    })}




                  </Slider>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* -----------------------------------
        ---------------------------------------
         Testimonial 
         ------------------------------
         ------------------------------------*/}
        <section className="gap no-top client-review-style-one">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="head-review">
                  <span>Testimonials</span>
                  <h3>Client’s Reviews</h3>
                </div>
                <div className="client-review-slider owl-carousel">
                  <Slider {...testimonialSettings}>



                    {testimonialsData.map((testimonial) => {
                      return (
                        <div className="slider-data">
                          {testimonial.node.testimonial && testimonial.node.testimonial.raw && renderRichText(testimonial.node.testimonial, options)}
                          <div className="bio d-flex-all justify-content-start w-100">
                            <div className="icon d-flex-all">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                              >
                                {" "}
                                <defs>
                                  {" "}
                                  <clipPath id="clip-Inverted">
                                    {" "}
                                    <rect width={26} height={26} />{" "}
                                  </clipPath>{" "}
                                </defs>{" "}
                                <g
                                  id="Inverted_"
                                  data-name="Inverted commas flaky"
                                  clipPath="url(#clip-Inverted)"
                                >
                                  {" "}
                                  <path
                                    id="Path_3444"
                                    data-name="Path 3"
                                    d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z"
                                    transform="translate(14 0.964)"
                                  />{" "}
                                  <path
                                    id="Path_weee4"
                                    data-name="Path 4"
                                    d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z"
                                    transform="translate(0.969 0.964)"
                                  />{" "}
                                </g>{" "}
                              </svg>
                            </div>
                            <div className="details w-100">
                              <h3>{testimonial.node.title}</h3>
                              <p>{testimonial.node.designation}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                  </Slider>
                </div>
              </div>
              <div className="col-lg-6 certificates ">
                <div className="data">
                  <figure className="c-img">
                    <img src={certificates} alt="ceritificates img" />
                  </figure>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </Layout>
      </>
    )
  }
}

export default IndexPage
export const homePageSlider = graphql`
  query homePageSlider {
    allContentfulHomeSlider(sort: {createdAt: ASC}) {
      edges {
        node {
          id
          title
          image {
            url
          }
          detail {
            raw
          }
          createdAt
        }
      }
    }
    allContentfulProjects(sort: {id: DESC}) {
      edges {
        node {
          id
          title
          slug
          sortDetail {
            sortDetail
          }
          image {
            url
          }
        }
      }
    }
    allContentfulClients(sort: {id: DESC}) {
      edges {
        node {
          id
          title
          logo {
            url
          }
        }
      }
    }
    allContentfulTestimonials(sort: {id: DESC}) {
      edges {
        node {
          id
          title
          designation
          testimonial {
            raw
          }
        }
      }
    }
    allContentfulHomeServices(sort: {id: DESC}) {
      edges {
        node {
          id
          title
          detail {
            raw
          }
          icon {
            url
          }
          iconForDarkBg {
            url
          }
        }
      }
    }
    allContentfulStatistics(sort: {createdAt: ASC}) {
      edges {
        node {
          id
          title
          value
          number
          numberText
        }
      }
    }
    allContentfulSeo(filter: {seoFor: {eq: "Home"}}) {
      edges {
        node {
          id
          title
          seoFor
          keywords
          detail {
            detail
          }
        }
      }
    }
    allContentfulAboutDetail(limit: 1, sort: {createdAt: DESC}) {
      edges {
        node {
          id
          imageLarge {
            url
            gatsbyImage(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 413
              height: 560
            )
          }
          imageSmall {
            url
            gatsbyImage(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 280
              height: 340
            )
          }
          sortDetail {
            raw
          }
          sortDetailAbout {
            raw
          }
          subtitle
          title
          detail2 {
            raw
          }
        }
      }
    }
  }
`;
// export const Head = () => <title>Home Page</title>
