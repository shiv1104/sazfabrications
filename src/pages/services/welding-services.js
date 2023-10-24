import * as React from "react";
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Hero from '../../components/hero';
import Seo from '../../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'




class Blog extends React.Component {
  render() {
    const servicesData = this.props.data.allContentfulServices.edges;
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

          {/* Blog Style One Start */}
          <section className="gap blog-style-one our-blog-one">
            <div className="container">
              <div className="row">

              {servicesData.map((post) => {
                if (post.node.slug.includes("welding-services/")) {
                return (
        
                  <div className="col-lg-4" >
                  <div className="blog-post">
                    <div className="blog-image">
                      <figure>
                        <GatsbyImage alt="" image={post.node.heroImage.gatsbyImage} />
                      </figure>
                      <Link to={`/services/${post.node.slug}`} >
                        <FontAwesomeIcon icon={faAnglesRight} />
                      </Link>
                    </div>
                    <div className="blog-data">
                      <h3>
                        <Link to={`/services/${post.node.slug}`} >
                          {post.node.title}
                        </Link>
                      </h3>
                     
                    </div>
                  </div>
                </div>

                );
                }
              })}
              




              </div>
            </div>
          </section>
          {/* Blog Style One End */}
        </Layout>
      </>

    )
  }
}
export default Blog
export const pageQuery = graphql`
  query pageQuery {
    allContentfulServices(sort: {createdAt: ASC}) {
      edges {
        node {
          id
          slug
          title
          heroImage{
            gatsbyImage(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 400
              height: 267
            )
          }
        }
      }
    }
   allContentfulSeo(filter: {seoFor: {eq: "Welding Services"}}) {
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
    allContentfulPageTitleAndSubtitle(filter: {pageName: {eq: "Welding_Services"}}) {
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