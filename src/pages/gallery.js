import * as React from "react";
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout';
import Hero from '../components/hero';

import Seo from '../components/seo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class Gallery extends React.Component {
  render() {
    const galleryCate = this.props.data.allContentfulGalleryCategory.edges;
    const seoDetail = this.props.data.allContentfulSeo.edges;
    const pageTitleData = this.props.data.allContentfulPageTitleAndSubtitle.edges;

    let seoTitle = pageTitleData[0].node.pageTitle;
    let seoDesc = pageTitleData[0].node.subtitle;
    let keywords = '';
    
    if (seoDetail.length > 0) {
      seoTitle = seoDetail[0].node.title || pageTitleData[0].node.pageTitle;
      seoDesc = seoDetail[0].node.detail?.detail || pageTitleData[0].node.subtitle;
      keywords = seoDetail[0].node.keywords || '';;
    }


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
     
        {/* Shop Style One Start */}
        <section className="gap blog-style-one our-blog-one">
            <div className="container">
              <div className="row align-items-center">

              
            {galleryCate.map((post) => {
                return (
                  <div className="col-lg-4" >
                  <div className="blog-post">
                    <div className="blog-image">
                      <figure>
                        <GatsbyImage alt="" image={post.node.image.gatsbyImageData} />
                      </figure>
                      <Link to={`${post.node.slug}`} >
                        <FontAwesomeIcon icon={faAnglesRight} />
                      </Link>
                    </div>
                    <div className="blog-data">
                      <h3>
                        <Link to={`${post.node.slug}`} >
                        {post.node.name}
                        </Link>
                      </h3>
                     
                    </div>
                  </div>
                </div>

                );
              })}


              
             


            </div>
          </div>
        </section>
        {/* Shop Style One End */}
      </Layout>

    </>

  )
}
}
export default Gallery
export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulGalleryCategory(sort: {name: ASC}) {
      edges {
        node {
          id
          name
          slug
          image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 400, height: 267)
          }
        }
      }
    }
    allContentfulSeo(filter: {seoFor: {eq: "Gallery"}}) {
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
    allContentfulPageTitleAndSubtitle(filter: {pageName: {eq: "Gallery"}}) {
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