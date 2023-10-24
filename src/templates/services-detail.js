import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Seo from '../components/seo'
import Modal from 'react-modal';
import Gallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

class BlogPostTemplate extends React.Component {

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
    const post = get(this.props, 'data.contentfulServices')
   // const plainTextDescription = post.sortDetail.sortDetail;
   const { selectedImageIndex, showModal } = this.state;
   const galleryImages = post.gallery.map((image, index) => ({
     original: image.url,
     thumbnail: image.gatsbyImage.images.fallback.src,
     description: `Image ${index + 1}`,
   }));
   const seoTitle = post.seoTitle || post.title;
   const seoDesc = post.seoDetail?.seoDetail || '';
   const keywords = post.seoKeywords || '';

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
        
      <Layout location={this.props.location}>
       
        <Hero
          image=''
          title={post.title}
          content=''
        />

<section class="gap blog-style-one blog-detail detail-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="blog-post ">
            <div class="blog-image">
              <figure>
              <GatsbyImage alt={post.title} image={post.heroImage?.gatsbyImage} />
              </figure>
            </div>
            

            {post.body?.raw && renderRichText(post.body, options)}

        
           
            </div>
            </div>
          </div>
          </div>
          </section>
         {/* Gallery Style One Start */}
      <section className="gallery-style-one gap pt-0">
        <div className="container g-0">
          <div className="row g-0">

          {post.gallery.map((image, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6">
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
      {/* Gallery Style One End */}
      </Layout>
      </>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ServicePostBySlug($slug: String!) {
    contentfulServices(slug: { eq: $slug }) {
      id
      slug
      title
      
      body {
        raw
      }
      heroImage {
        url
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1200)
        resize(height: 630, width: 1200) {
          src
        }
      }
      gallery {
        url
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 400
            height: 267
          )
      }
      seoTitle
    seoKeywords
    seoDetail {
      seoDetail
    }
    }
  }
`;
