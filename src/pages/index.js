import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import amy from '../images/amy.jpg'

export default function IndexPage({ data }) {
  const reset = <div className="reset" />;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      {/* replace conditional page_handle for class */}
      <div className="border-top" />
      <header className="featured-header">
        <Header />
        {/* {% include featured-post.html %} */}
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
          <StaticQuery
            query={graphql`
              query HomePageQuery {
                allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
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
            `}
            render={posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div class="col-md-4" key={post.id}>
                    <article id="" class="">
                      <figure class="entry-image">
                        <a href="#">
                          <img src={amy} class="img-responsive size-posts-thumb" width="350px" height="200px" />
                        </a>
                      </figure>
                      <header class="entry-header">
                        <h2 class="entry-title">
                          <Link to={post.frontmatter.path}
                            rel="bookmark"
                          >
                            {post.frontmatter.title}
                          </Link>
                        </h2>
                      </header>

                      <div class="entry-content">
                        <p>Excerpt goes here</p>
                      </div>

                      <footer class="entry-footer">
                        <div class="entry-meta">
                          <p>
                            <span>
                              <a href="/collection-link-here">Collection</a>
                            </span>
                            /
                    <time datetime="{{ document.date }}">
                              <Link
                                to="{post.frontmatter.path}"
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
              })
            }
          />
          {/* {
    posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => {
        return (
          <div class="col-md-4" key={post.id}>
            <article id="" class="">
              <figure class="entry-image">
                <a href="#">
                  <img src={amy} class="img-responsive size-posts-thumb" width="350px" height="200px" />
                </a>
              </figure>
              <header class="entry-header">
                <h2 class="entry-title">
                  <Link to={post.frontmatter.path} 
                  rel="bookmark"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h2>
              </header>

              <div class="entry-content">
                <p>Excerpt goes here</p>
              </div>

              <footer class="entry-footer">
                <div class="entry-meta">
                  <p>
                    <span>
                      <a href="/collection-link-here">Collection</a>
                    </span>
                     / 
                    <time datetime="{{ document.date }}">
                      <Link
                        to="{post.frontmatter.path}"
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
      })
  } */}

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
