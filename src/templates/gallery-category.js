import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

import Seo from '../components/seo'

const CategoryTemplate = ({ data }) => {
  const { name, seoTitle, seoKeyword, seoDetail  } = data.contentfulGalleryCategory;
 

  const seodetails = seoDetail?.seoDetail || '';
  const posts = data.allContentfulGallery.edges;


  return (
    <>
    <Seo
          title={seoTitle}
          description={seodetails}
          keywords={seoKeyword}
        />
        
    <Layout>

      <Hero
        image=''
        title={name}
        content=''
      />

      <section className="gap blog-style-one our-blog-one">
        <div className="container">
          <div className="row align-items-center">


            {posts.map((post) => {
              return (
                <div className="col-lg-4" >
                  <div className="blog-post">
                    <div className="blog-image">
                      <figure>
                        <GatsbyImage alt="" image={post.node.cardImage.gatsbyImage} />
                      </figure>
                      <Link to={`/gallery/detail/${post.node.slug}`} >
                        <FontAwesomeIcon icon={faAnglesRight} />
                      </Link>
                    </div>
                    <div className="blog-data">
                      <h3>
                        <Link to={`${post.node.slug}`} >
                          {post.node.title}
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

    </Layout>
    </>
  )

}

export default CategoryTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulGalleryCategory(slug: { eq: $slug }) {
      name
      seoDetail {
        seoDetail
      }
      seoTitle
      seoKeyword
    }
    allContentfulGallery(
      filter: { category: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          id
          title
          slug
          cardImage {
            gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 400, height: 267)
          }
          category {
            slug
            name
          }
        }
      }
    }
  }
`;

