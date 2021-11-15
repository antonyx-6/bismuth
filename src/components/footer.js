import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useEffect } from "react"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Footer = ({ siteTitle }) => {
  return (
    <p>Footer</p>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
