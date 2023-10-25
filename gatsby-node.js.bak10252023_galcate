const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define templates for blog post and services
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js');
  const servicesDetailTemplate = path.resolve('./src/templates/services-detail.js');
  const galleryCateListTemplate = path.resolve('./src/templates/gallery-category.js');
  const galleryDetailTemplate = path.resolve('./src/templates/gallery-detail.js');

  // Create pages for blog posts
  const blogResult = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  );

  if (blogResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful blog posts`,
      blogResult.errors
    );
    return;
  }

  const blogPosts = blogResult.data.allContentfulBlogPost.nodes;

  if (blogPosts.length > 0) {
    blogPosts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : blogPosts[index - 1].slug;
      const nextPostSlug =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].slug;

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPostTemplate,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      });
    });
  }

  // Create pages for services
  const servicesResult = await graphql(`
    {
      allContentfulServices {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (servicesResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful services`,
      servicesResult.errors
    );
    return;
  }

  const services = servicesResult.data.allContentfulServices.edges;

  if (services.length > 0) {
    services.forEach(({ node }) => {
      createPage({
        path: `/services/${node.slug}/`,
        component: servicesDetailTemplate,
        context: {
          slug: node.slug,
        },
      });
    });
  }
    
  // Create pages for blog cate
  const galleryCateResult = await graphql(`
    {
      allContentfulGalleryCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (galleryCateResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful gallery`,
      galleryCateResult.errors
    );
    return;
  }

  const galleryCate = galleryCateResult.data.allContentfulGalleryCategory.edges;

  if (galleryCate.length > 0) {
    galleryCate.forEach(({ node }) => {
      createPage({
        path: `/gallery/${node.slug}/`,
        component: galleryCateListTemplate,
        context: {
          slug: node.slug,
        },
      });
    });
  }
    

    
  // Create pages for Gallery Detail Single
  const galleryResult = await graphql(`
    {
      allContentfulGallery {
        edges {
          node {
            id
            slug
            category {
                slug
                name
            }
          }
        }
      }
    }
  `);

  if (galleryResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful gallery`,
      galleryResult.errors
    );
    return;
  }

  const galleries = galleryResult.data.allContentfulGallery.edges;

  if (galleries.length > 0) {
    galleries.forEach(({ node }) => {
      createPage({
        path: `/gallery/${node.category.slug}/${node.slug}/`,
        component: galleryDetailTemplate,
        context: {
          slug: node.slug,
        },
      });
    });
  }
    
     // Create pages for homeslider
  const homesliderResult = await graphql(`
    {
      allContentfulHomeSlider {
        edges {
          node {
            id
            title
            image {
              url
            }
            detail {
              raw
            }
            createdAt
          }
        }
      }
    }
  `);

  if (homesliderResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful services`,
      homesliderResult.errors
    );
    return;
  }

  const sliders = homesliderResult.data.allContentfulHomeSlider.edges;
    
};
