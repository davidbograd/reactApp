import React from 'react'
import Link from 'gatsby-link'
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div>
    <div className="Header">
      <div className="HeaderGroup">
        <svg width="103" height="154" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M101 53.5c0 64-50.5 100.5-50.5 100.5S0 118.5 0 53.5a50.5 50.5 0 1 1 101 0z" fill="#4F38FF"/><rect x="1" y="118" width="100" height="8" rx="4" fill="#4F38FF"/><circle cx="27" cy="58" r="19" fill="#fff"/><circle cx="74" cy="58" r="19" fill="#fff"/><path d="M82 61a8 8 0 1 0-16 0M35 60a8 8 0 1 0-16 0" stroke="#4F38FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M37 117a4 4 0 0 1 8 0v9a4 4 0 0 1-8 0v-9zM57 117a4 4 0 0 1 8 0v9a4 4 0 0 1-8 0v-9zM49.67 84.3L43.5 78.8a2 2 0 0 1-.15-2.83l6.17-6.82a2 2 0 0 1 2.96 0l6.17 6.82a2 2 0 0 1-.15 2.83l-6.17 5.52a2 2 0 0 1-2.66 0z" fill="#fff"/><path d="M6 1c.83 6.67 6.3 20 21.5 20M98.5 1c-.83 6.67-6.3 20-21.5 20" stroke="#4F38FF" stroke-width="8"/></svg>
        <Link to ="/">To the top</Link>
        <Link to="/about/">About</Link>
        <Link to =""><button>Submit Wisdom?</button></Link>
      </div>
    </div>
  </div>
)

export default Header
