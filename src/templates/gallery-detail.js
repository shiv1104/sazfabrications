import React, { Component, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Gallery from "react-image-gallery";
import Seo from '../components/seo'
import 'react-image-gallery/styles/css/image-gallery.css';

class GalleryPostTemplate extends Component {


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
    const post = get(this.props, 'data.contentfulGallery');
    const { selectedImageIndex, showModal } = this.state;
    const galleryImages = post.images.map((image, index) => ({
      original: image.url,
      thumbnail: image.gatsbyImage.images.fallback.src,
      description: `Image ${index + 1}`,
    }));

    const seoTitle = post.seoTitle || post.title;
    const seoDesc = post.seoDetail?.seoDetail || '';
    const keywords = post.seoKeywords || '';

    return (
      <>
      <Seo
          title={seoTitle}
          description={seoDesc}
          keywords={keywords}
        />
      
      <Layout location={this.props.location}>
        <Hero image="" title={post.title} content="" />
        <section className="gap shop-style-one addition">
          <div className="container">
            <div className="row p-slider align-items-center justify-content-center grid">
              {post.images.map((image, index) => (
                <div className="col-lg-4 mb-30" key={index}>
                  <div className="product p-0">
                    <div className="main-data">
                      <div className="btn-hover">
                        <figure>
                          <div
                            href={image.url}
                            className="popup-image"
                            title={`Image ${index + 1}`}
                            onClick={() => this.openImageSlider(index)}
                          >
                            <GatsbyImage
                              image={image.gatsbyImage}
                              alt={`Image ${index + 1}`}
                            />
                          </div>
                        </figure>
                        <div
                          to={image.url}
                          className="theme-btn popup-image"
                          title={`View Image ${index + 1}`}
                          onClick={() => this.openImageSlider(index)}
                        >
                          View <i><FontAwesomeIcon icon={faEye} /></i>
                        </div>
                      </div>
                    </div>
                  </div>
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
        </section>
      </Layout>
      </>
    );
  }
}

export default GalleryPostTemplate;

export const pageQuery = graphql`
  query GalleryPostBySlug($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      id
      title
      slug
      images {
        url
        gatsbyImage(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 400
          height: 267
        )
      }
      cardImage {
        url
      }
      seoTitle
    seoKeywords
    seoDetail {
      seoDetail
    }
    }
  }
`;
