import * as React from "react";
import { Link, graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import videoPopup from "../images/services-img.jpg"
import headingIcon from "../images/heading-icon.png";

import Seo from '../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import Layout from '../components/layout';
import Hero from '../components/hero';


class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tab1", // Set the default active tab here
    };
  }

  handleTabClick = (tabId) => {
    this.setState({ activeTab: tabId });
  };

  render() {
    const { activeTab } = this.state;
    const servicesData = this.props.data.allContentfulServicePageTab.edges;
    const exclusiveServicesData = this.props.data.allContentfulExclusiveServices.edges;
    const pageTitleData = this.props.data.allContentfulPageTitleAndSubtitle.edges;
    const seoDetail = this.props.data.allContentfulSeo.edges;
    let seoTitle = pageTitleData[0].node.pageTitle;
    let seoDesc = pageTitleData[0].node.subtitle;
    let keywords = '';
    
    if (seoDetail.length > 0) {
      seoTitle = seoDetail[0].node.title || pageTitleData[0].node.pageTitle;;
      seoDesc = seoDetail[0].node.detail?.detail || pageTitleData[0].node.subtitle;
      keywords = seoDetail[0].node.keywords || '';
    }


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
          <Hero
            image=''
            title={pageTitleData[0].node.pageTitle}
            content={pageTitleData[0].node.subtitle}
          />


          {/* Construction Services Start */}
          <section className="gap  construction-services">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="services-nav">
                    <h2>Services</h2>
                    <ul className="nav nav-tabs nav-pills mb-3">

                      {servicesData.map((services, index) => (
                        <li className="nav-item" key={services.node.id}>
                          <button
                            className={`nav-link ${activeTab === `tab${index + 1}` ? "active" : ""}`}
                            onClick={() => this.handleTabClick(`tab${index + 1}`)}
                          >
                            {services.node.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8">

                  <div className="tab-content" id="pills-tabContent">

                  <div className="tab-content">
  {servicesData.map((services, index) => (
    <div
      className={`tab-pane ${activeTab === `tab${index + 1}` ? "active" : ""}`}
      id={`tab${index + 1}`}
      key={services.node.id}
    >
      <figure>
      <GatsbyImage
              image={services.node.image?.gatsbyImageData}
              alt={`Services Nav Image ${index + 1}`}
              className="w-100"
            />
        <figcaption>
          <h3><a href={services.node.pageLink}>{services.node.title}</a></h3>
          <p>{services.node.detail.detail}</p>
          {services.node.pageLink ? (
  <a href={services.node.pageLink} className="text-white-btn mt-15">
    Read More <i className="fa-solid fa-angles-right"><FontAwesomeIcon icon={faAnglesRight} /></i>
  </a>
) : null}
        </figcaption>
      </figure>
    </div>
  ))}
</div>


                    {/* Add more tab content as needed */}
                  </div>



                </div>
              </div>
            </div>
          </section>
          {/* Construction Services End */}


          {/* Video PopUp Start */}
          <div className="video-popup">
            <div className="container-fluid g-0">
              <div className="row">
                <figure>
                  <img
                    src={videoPopup}
                    alt="Video PopUp Image"
                  />
                </figure>
              </div>
            </div>
          </div>
          {/* Video PopUp Start */}
          {/* Service Style Two Start */}
          <section className="gap service-style-two">
            <div className="heading">
              <figure>
                <img src={headingIcon}
                  alt="heading-icon-2" />
              </figure>
              <span>What We Provide</span>
              <h2>Exclusive Services</h2>
            </div>
            <div className="container">
              <div className="row g-0">

              {exclusiveServicesData.map((exclusiveServices) => {

    return (
      <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="service-two-box">
        <h3>
          <a href="#">{exclusiveServices.node.title}</a>
        </h3>
        {exclusiveServices.node.detail?.raw && renderRichText(exclusiveServices.node.detail, options)}
        <div className="service-two-icon d-flex-all justify-content-start">
          <img src={exclusiveServices.node.image.url} alt="" className="light-icon" />
          <img src={exclusiveServices.node.imageOnDark.url} alt="" className="dark-icon" />
          <a href="#">
            <i className="fa-solid fa-arrow-up-long" />
          </a>
        </div>
      </div>
    </div>
    );
  })}

                
              
              </div>
            </div>
          </section>
          {/* Service Style Two End */}
        </Layout>
      </>

    )
  }
}
export default Services

export const servicesQuery = graphql`
  query servicesQuery {
    
    allContentfulServicePageTab(sort: {createdAt: ASC}) {
      edges {
        node {
          id
          title
          detail {
            detail
          }
          pageLink
          image {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 800
              height: 550
            )
          }
        }
      }
    }
    allContentfulExclusiveServices(sort: {createdAt: ASC}) {
      edges {
        node {
          id
          image {
            url
          }
          imageOnDark {
            url
          }
          title
          detail {
            raw
          }
        }
      }
    }
    allContentfulSeo(filter: {seoFor: {eq: "Services"}}) {
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
    allContentfulPageTitleAndSubtitle(filter: {pageName: {eq: "Services"}}) {
      edges {
        node {
          id
          pageTitle
          subtitle
        }
      }
    }
  }
`;
