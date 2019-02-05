import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import FeaturedPost from '../components/featuredPost'
import amy from '../images/amy.jpg'

const IndexPage = ({ data }) => {
  const reset = <div className="reset" />;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      {/* replace conditional page_handle for class */}
      <div className="border-top" />
      <header className="featured-header">
        <Header />
        {/* <FeaturedPost /> */}
      </header>

      <main className="container" id="" role="main">
        <section className="row" id="about-amy">
          <div className="col-md-12 frame-area">
            <div className="col-md-6">
              <figure>
                <img className="img-responsive" id="profile" src={amy} alt="Amy" />
              </figure>
            </div>
            <div className="frame-border"></div>
            <div className="col-md-6">
              <aside>
                <h2>Hi, I'm Amy!</h2>
                <p className="about-text">A few months ago, I quit my comfortable, salaried career to pursue real happiness. What does that look like? To be honest, I'm not really sure. But I've decided to start with learning more about our world through experiencing it.</p>
                <Link
                  className="text-link"
                  to="/about"
                >
                  Learn more about my journey
                </Link>
              </aside>
            </div>
          </div>
        </section>
        <section className="row" id="posts-row">
          {/* query for posts here */}
          {posts.map(({ node: post }) => {
            console.log('post', post);
            const { frontmatter } = post;
            return (
              <div className="col-md-4" key={post.id}>
                <article id="" className="">
                  <figure className="entry-image">
                    <Link to={frontmatter.path}>
                      <img src={amy} className="img-responsive size-posts-thumb" width="350px" height="200px" />
                    </Link>
                  </figure>
                  <header className="entry-header">
                    <h2 className="entry-title">
                      <Link
                        to={frontmatter.path}
                        rel="bookmark"
                      >
                        {frontmatter.title}
                      </Link>
                    </h2>
                  </header>

                  <div className="entry-content">
                    <p>Excerpt goes here</p>
                  </div>

                  <footer className="entry-footer">
                    <div className="entry-meta">
                      <p>
                        <span>
                          <a href="/collection-link-here">Collection</a>
                        </span>
                        /
                    <time dateTime="{frontmatter.date}">
                          <Link
                            to={frontmatter.path}
                          >
                            {post.frontmatter.date}
                          </Link>
                        </time>
                      </p>
                    </div>
                  </footer>
                </article>
              </div>
            )
          })}

          {reset}

          <div className="category-link">
            <Link
              className="btn"
              to="/travel"
              title="Travel"
            >
              Read more in Travel
            </Link>
            <Link
              className="btn"
              to="/thoughts"
              title="Thoughts"
            >
              Read more in Thoughts
            </Link>
          </div>
        </section>
      </main>

      <section className="instagram">
        {/* {% include instafeed.html %} */}
      </section>

      {/* Add footer here */}
    </Layout >
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default IndexPage;