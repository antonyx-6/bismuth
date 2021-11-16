import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useEffect } from "react"

import BismuthLogo from "../images/bismuth-logo.svg"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Header = ({ siteTitle }) => {
  return (

<nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4 sticky-top" aria-label="Navbar" id="main-header">
   <div class="container-fluid">
      <a class="navbar-brand" href="/"><img src={BismuthLogo} height="40" class="" alt="Bismuth Logo"/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle Navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main-menu">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
               <ExactNavLink className="nav-link" to="/">Home</ExactNavLink>
            </li>
            <li class="nav-item">
               <ExactNavLink className="nav-link" to="/resources/">Resources</ExactNavLink>
            </li>
            <li class="nav-item">
               <ExactNavLink className="nav-link" to="/bismuth-wallets/">Bismuth Wallets</ExactNavLink>
            </li>
            <li class="nav-item">
               <ExactNavLink className="nav-link" to="/buy-bismuth/">Buy Bismuth</ExactNavLink>
            </li>
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
               <ul class="dropdown-menu" aria-labelledby="dropdown01">
                  <li><a class="dropdown-item" href="/page-one">Page One</a></li>
                  <li><a class="dropdown-item" href="/page-two/">Page Two</a></li>
               </ul>
            </li>
         </ul>
      </div>
   </div>
</nav>



  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
