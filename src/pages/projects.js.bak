import * as React from "react";
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'

import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'
import Layout from '../components/layout';
import Hero from '../components/hero';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class Projects extends React.Component {
  render() {
    const projectsData = this.props.data.allContentfulProjects.edges;
    const seoDetail = this.props.data.allContentfulSeo.edges;
    let seoTitle = 'Projects';
    let seoDesc = '';
    let keywords = '';
    
    if (seoDetail.length > 0) {
      seoTitle = seoDetail[0].node.title || 'Projects';
      seoDesc = seoDetail[0].node.detail?.detail || '';
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
          title='Our Projects'
          content='our values and vaulted us to the top of our industry.'
        />

  {/* Our Project Two Start */}
  <section className="gap project-style-one addition">
    <div className="container">
      <div className="row project-slider">

      {projectsData.map((post) => {
                return (
        
                  <div className="col-lg-6">
          <div className="project-post">
            <figure>
            <img src={post.node.image.url} alt={post.node.title} className="w-100" />
            </figure>
            <div className="project-data">
              <h3>{post.node.title}</h3>
              {post.node.sortDetail.sortDetail}
              {/* <Link to={`/${post.node.slug}`} className="project-icon" >
                <FontAwesomeIcon icon={faAnglesRight} />
              </Link> */}
            </div>
          </div>
        </div>

                );
              })}

      </div>
    </div>

    
  </section>
  {/* Our Project Two End */}
  </Layout>

    </>
  )
  }
}

export default Projects
export const pageQuery = graphql`
  query BlogIndexQuery {
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
    allContentfulSeo(filter: {seoFor: {eq: "Projects"}}) {
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
  }
`;