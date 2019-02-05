import React from 'react'

const FeaturedPost = () => {
  return (
    <section class="featured-post container">
      <div class="row">
      {% assign sticky_posts = site.documents | where:"meta.sticky","yes" %}
        {% for sticky_post in sticky_posts | limit:1 %}
        <article id="post-" class="sticky-post col-md-6">
          <header class="post-title col-md-12">
            <h2><a href="{{ sticky_post.url }}">{{ sticky_post.title }}</a></h2>
          </header>
          <footer class="post-meta col-md-12">
            <p>
              <span class="cat-links"><a href="{{ site.url }}{{ sticky_post.collection }}">{{ sticky_post.collection }}</a></span>
              &#8226; <span class="posted-on"><a href="{{ sticky_post.url }}"><time class="entry-date" datetime="{{ sticky_post.date }}">{{ sticky_post.date | date: '%B %-d, %Y' }}</time></a></span>
            </p>
          </footer>
        </article>
        <aside class="email-signup col-md-4 col-md-offset-2">
          <p>Something about signing up for my newsletter because it will be awesome.</p>
          <form action="" method="post" class="signup-form">
            <input type="email" name="Email" placeholder="Your Email..." id="">
            <input type="hidden" name="location" id="location" value="home">
            <div style="position:absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="" tabindex="">
            </div>
            <button type="submit" name="subsribe" id="">Sign Up</button>
          </form>
        </aside>
      </div>
    </section>
    <style>.featured-header:before {background - image: url('{{ site.dropbox }}/photos/{{ sticky_post.featured - image }}');}</style>
    
    {% else %}
      <section class="featured-post container">
          <div class="row">
            <article id="post-" class="sticky-post col-md-6">
              <header class="post-title col-md-12">
                <h2><a href="{{ site.url }}/newsletter">Keep Up With My Journey</a></h2>
              </header>
              <footer class="post-meta col-md-12">
                <p>Sign up to receive my updates in your inbox.</p>
              </footer>
            </article>
            <aside class="email-signup col-md-4 col-md-offset-2">
              <p>Something about signing up for my newsletter because it will be awesome.</p>
              <form action="" method="post" class="signup-form">
                <input type="email" name="Email" placeholder="Your Email..." id="">
                  <input type="hidden" name="location" id="location" value="home">
                    <div style="position:absolute; left: -5000px;" aria-hidden="true">
                      <input type="text" name="" tabindex="">
                </div>
                      <button type="submit" name="subsribe" id="">Sign Up</button>
            </form>
        </aside>
    </div>
  </section>
  <style>.featured-header:before {background - image: url('{{ site.dropbox }}/photos/302.jpg');}</style>
    {% endfor %}
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