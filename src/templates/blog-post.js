import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import readingTime from 'reading-time'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'


class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    const plainTextDescription = documentToPlainTextString(
      JSON.parse(post.description.raw)
    )
    const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw))
    const { minutes: timeToRead } = readingTime(plainTextBody)
    

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
          content={plainTextDescription}
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
            <div class="blog-data">
              <span class="blog-date">{post.publishDate}</span>
              <div class="blog-author d-flex-all justify-content-start">
                <div class="details">
                  <ul className='blogmeta d-flex'>
                    <li><FontAwesomeIcon icon={faUser} /> {post.author?.name}</li>
                     <li style={{ marginLeft: '10px' }}><FontAwesomeIcon icon={faClock} /> {timeToRead} minute read</li>
                     </ul>
                </div>
              </div>
            </div>

            {post.body?.raw && renderRichText(post.body, options)}

        
            <div class="category shape">            
            {(previous || next) && (
              <div className='d-flex w-100 justify-content-between align-content-center'>
                  {previous && (
                    <p>
                      <Link to={`/blog/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </p>
                  )}
                  {next && (
                    <p>
                      <Link to={`/blog/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </p>
                  )}
                  </div>
            )}
</div>
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      seoTitle
    seoKeywords
    seoDetail {
      seoDetail
    }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        url
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        raw
        
      }
      tags
      description {
        raw
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
