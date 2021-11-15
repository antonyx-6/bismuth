import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "./style.scss"

import {  Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container fluid className="p-0">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main >
        <main>{children}</main>
      </main>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
