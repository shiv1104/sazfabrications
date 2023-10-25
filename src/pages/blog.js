import * as React from "react";
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Hero from '../components/hero';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const truncateText = (text, maxWords) => {
  // Split the text into words
  const words = text.split(' ');

  // Check if the text has more than the maximum number of words
  if (words.length > maxWords) {
    // Join the first maxWords words and add an ellipsis
    return words.slice(0, maxWords).join(' ') + '...';
  }

  // If the text has fewer words than the maximum, return it as is
  return text;
};


class Blog extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes');
    const seoDetail = this.props.data.allContentfulSeo.edges;
    let seoTitle = 'Blog';
    let seoDesc = '';
    let keywords = '';
    
    if (seoDetail.length > 0) {
      seoTitle = seoDetail[0].node.title || 'Blog';;
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
            title='Our Blog'
            content='Our values and vaulted us to the top of our industry.'
          />

          {/* Blog Style One Start */}
          <section className="gap blog-style-one our-blog-one">
            <div className="container">
              <div className="row">


                {posts.map((post) => {
                  return (
                    <div className="col-lg-4" key={post.slug}>
                      <div className="blog-post">
                        <div className="blog-image">
                          <figure>
                            <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />
                          </figure>
                          <Link to={`/blog/${post.slug}`} >
                            <FontAwesomeIcon icon={faAnglesRight} />
                          </Link>
                        </div>
                        <div className="blog-data">
                          <span className="blog-date">{post.publishDate}</span>
                          <h3>
                            <Link to={`/blog/${post.slug}`} >
                              {post.title}
                            </Link>
                          </h3>
                          <div className="details">
                              <p>{truncateText(documentToPlainTextString(JSON.parse(post.description.raw)), 20)}</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  )
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
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        author {
          name
        }
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulSeo(filter: {seoFor: {eq: "Blog"}}) {
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