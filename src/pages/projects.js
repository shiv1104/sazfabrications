import * as React from "react";
import { graphql, Link } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout';
import Hero from '../components/hero';
import placeholder_image_url from "../images/placeholder-600-400.jpg"


class Projects extends React.Component {
  render() {
    const projectsData = this.props.data.allContentfulProjects.edges;
    const seoDetail = this.props.data.allContentfulSeo.edges;
    const pageTitleData = this.props.data.allContentfulPageTitleAndSubtitle.edges;
    let seoTitle = pageTitleData[0].node.pageTitle;
    let seoDesc = pageTitleData[0].node.subtitle;
    let keywords = '';
    
    if (seoDetail.length > 0) {
      seoTitle = seoDetail[0].node.title || pageTitleData[0].node.pageTitle;
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

  {/* Our Project Two Start */}
  <section className="gap project-style-one addition">
    <div className="container">
      <div className="row project-slider">

      {projectsData.map((post) => {
                return (
        
                  <div className="col-lg-6">
          <div className="project-post">
            <figure>
            <img 
            src={post.node.image ? post.node.image.url : placeholder_image_url}
            alt={post.node.title} className="w-100 projectImage" />
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
    allContentfulPageTitleAndSubtitle(filter: {pageName: {eq: "Projects"}}) {
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