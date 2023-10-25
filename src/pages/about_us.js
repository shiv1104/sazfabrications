import React, { Component, useEffect } from 'react';
import { Link, graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BLOCKS } from '@contentful/rich-text-types'
import Modal from 'react-modal';
import Gallery from "react-image-gallery";
import Seo from '../components/seo'
import 'react-image-gallery/styles/css/image-gallery.css';

import aboutOne from "../images/about-image-1.jpg";
import aboutTwo from "../images/about-image-2.jpg";
import readytowork from "../images/ready-to-work.png";

import building from "../images/building-2.png";
import heading from "../images/heading-icon.png"


import Layout from '../components/layout';
import Hero from '../components/hero';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons';

class About_Us extends React.Component {
  
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedImageIndex: 0,
    };
  }

  // ...

  // Add open and close modal functions
  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  // Add open image slider function
  openImageSlider = (imageIndex) => {
    this.setState({ selectedImageIndex: imageIndex });
    this.openModal();
  };

  render() {
    const aboutCoreValues = this.props.data.allContentfulAboutCoreValues.edges;
    const aboutGallery = this.props.data.allContentfulAboutGallery.edges;
    const aboutusData = this.props.data.allContentfulAboutDetail.edges;
    const { selectedImageIndex, showModal } = this.state;

    const galleryImages = aboutGallery.map((imagepost, index) => ({
      original: imagepost.node.image.url,
      thumbnail: imagepost.node.image.gatsbyImage.images.fallback.src,
      description: imagepost.node.name,
    }));


    const seoDetail = this.props.data.allContentfulSeo.edges;
    const seoTitle = seoDetail[0].node.title;
    const seoDesc = seoDetail[0].node.detail.detail;
    const keywords = seoDetail[0].node.keywords || '';

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
          title='About Us'
          content='Experience top-quality steel fabrication and engineering works in Dubai.'
        />


      {/* About Style One Start */}
      <section className="gap about-style-one">
        <div className="container">
        {aboutusData.map((aboutus) => {
                return (
                  <div className="row">
            <div className="col-lg-6">
              <div className="about-data-left">
                <figure>
                  <img src={aboutus.node.imageLarge.url} alt="About One" />
                </figure>
                <figure className="about-image">
                  <img src={aboutus.node.imageSmall.url} alt="About Two" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-data-right">
                <span>{aboutus.node.subtitle}</span>
                <h2>{aboutus.node.title}</h2>
                <div className="about-info">
                {aboutus.node.sortDetailAbout && aboutus.node.sortDetailAbout.raw && renderRichText(aboutus.node.sortDetailAbout, options)}
                  </div>
              </div>
            </div>

            <div className="col-md-12">
                {aboutus.node.detail2 && aboutus.node.detail2.raw && renderRichText(aboutus.node.detail2, options)}
            </div>
          </div>
           
                  
                );
              })}

          
        </div>
      </section>
      {/* About Style One End */}


      {/* Core Values Start */}
      <section className="gap no-top core-values">
        <div className="heading">
          <figure>
            <img src={heading} alt="Heading Icon" />
          </figure>
          <span>MAKE A DIFFERENCE</span>
          <h2>Our Core Values</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>

            {aboutCoreValues.map((coreValue, index) => {
  return (
    <>
        {index % 2 === 0 ? (
          <li key={coreValue.node.id}>
          <div className="data">
          <h3>{coreValue.node.title}</h3>
          {coreValue.node.detail && coreValue.node.detail.raw && renderRichText(coreValue.node.detail, options)}
        </div>
        <div className="image">
          <figure>
          <img className="w-100" src={coreValue.node.image.url} alt="Core Values Image 1" />
          </figure>
        </div>
        </li>
        ) : (
          <li key={coreValue.node.id}>
          
        <div className="image">
          <figure>
          <img className="w-100" src={coreValue.node.image.url} alt="Core Values Image 1" />
          </figure>
        </div>
        <div className="data">
          <h3>{coreValue.node.title}</h3>
          {coreValue.node.detail && coreValue.node.detail.raw && renderRichText(coreValue.node.detail, options)}
        </div>
        </li>
        )}
        
        </>

  );
})}



              
            </ul>
          </div>
        </div>
      </section>
      {/* Core Values End */}
      {/* Gallery Style One Start */}
      <div className="gallery-style-one">
        <div className="container-fluid g-0">
          <div className="row g-0">

          {aboutGallery.map((image, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
              <div
                            href={image.node.image.url}
                            className="popup-image"
                            title={image.node.name}
                            onClick={() => this.openImageSlider(index)}
                          >
                            <GatsbyImage
                              image={image.node.image.gatsbyImage}
                              alt={image.node.name}
                            />
                          </div>
              </figure>
            </div>
        ))}
<Modal
          isOpen={showModal}
          onRequestClose={this.closeModal}
          contentLabel="Image Gallery"
        >
          <Gallery
            items={galleryImages}
            startIndex={selectedImageIndex}
            showIndex
          />
          <button className='close-popup' onClick={this.closeModal}><FontAwesomeIcon icon={faClose} /></button>
        </Modal>

          </div>
        </div>
      </div>
      {/* Gallery Style One End */}
      {/* Innovation Start */}
      <section className="gap innovation">
        <div className="heading">
          <span>MAKE A DIFFERENCE</span>
          <h2>Innovation in Action</h2>
        </div>
    
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <i className="fa-solid fa-check" />
                <p>Successful Project Track Record</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Engineering & Craftsmanship experts</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Custom Tailored Solutions</p>
              </li>



              <li>
                <i className="fa-solid fa-check" />
                <p>Stringent Quality Standards</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Reliable on Time Delivery</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Competitive Pricing</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Innovation End */}
      {/* CTA Section Start */}
      <section className="cta-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta-data">
                <h2>Ready to work together?</h2>
                <p>
                Discover the precision and quality of Saz Steel Fabrication's metal and stainless steel fabrication services. Take the first step towards excellence today!
                </p>
                <a href="/contact_us/" className="theme-btn theme-btn-in-white" >Get a Quote <i><FontAwesomeIcon icon={faAnglesRight} /></i> </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cta-data">
                <figure className="no-bg">
                  <img src={readytowork} alt="Building-2 Pic" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section End */}

      
      
    </Layout>
  </>
  
  )
}
}

export default About_Us
export const aboutPage = graphql`
  query aboutPage {
    allContentfulAboutCoreValues(sort: {createdAt: ASC}) {
      edges {
        node {
          id
          title
          detail {
            raw
          }
          image {
            url
          }
        }
      }
    }
    allContentfulSeo(filter: {seoFor: {eq: "About Us"}}) {
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
    allContentfulAboutGallery(sort: {createdAt: ASC}) {
      edges {
        node {
          id
          name
          image {
            url
            gatsbyImage(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 400
              height: 400
            )
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