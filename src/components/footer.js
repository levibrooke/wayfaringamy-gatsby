import React from 'react'

const Footer = () => (
  <footer id="colophon" class="site-footer" role="contentinfo">
    <div class="container">
        <div class="row">
            <div class="site-links col-md-4">
                <h4>Links</h4>
                <ul>
                    {% for nav in site.data.navigation.nav %}
                    <li><a href="{{ site.url }}{{ nav.url }}">{{ nav.title }}</a></li>
                    {% endfor %}
                </ul>
            </div>
            <div class="site-follow col-md-4">
                <h4>Follow</h4>
                <ul>
                    <li><a href="#" target="_blank">Facebook</a></li>
                    <li><a href="#" target="_blank">Twitter</a></li>
                    <li><a href="#" target="_blank">Instagram</a></li>
                    <li><a href="#" target="_blank">Email Me</a></li>
                </ul>
            </div>
            <aside class="email-signup col-md-4">
                <h4>Newsletter</h4>
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
    </div>
</footer>

<div class="border-bottom"></div>

)