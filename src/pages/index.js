import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (

  <div>
    <div className="colorLine">
    </div>
    <div className="contentWrapper">
      <div className="titleArea">
        <h1>Bitesized Wisdom</h1>
        <p>Interesting thoughts from around the web.</p>
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta mi a magna tristique efficitur. Donec sodales sapien non felis laoreet tempus. Mauris et dui elit. Etiam feugiat, libero non ultrices auctor, augue risus bibendum orci, eget auctor turpis diam nec nulla. Mauris ut purus rutrum, scelerisque ante et, sollicitudin orci. Sed scelerisque ut magna non dictum. Praesent condimentum accumsan dui, non eleifend est convallis eget. Fusce interdum congue ullamcorper. Vivamus eget varius mi.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default IndexPage
