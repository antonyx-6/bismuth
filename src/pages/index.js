import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import ApplicationsIcon from "../images/icon-bismuth-applications.svg"
import SideChainsIcon from "../images/icon-bismuth-sidechains.svg"
import BridgesIcon from "../images/icon-bismuth-bridges.svg"
import HypernodesIcon from "../images/icon-bismuth-hypernodes.svg"
import CrystalsIcon from "../images/icon-bismuth-crystals.svg"
import TokensIcon from "../images/icon-bismuth-tokens.svg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="home-bar" fluid>
    <Container>
      
    </Container>
  </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Row className="text-center g-5 py-5">
              <Col xs={12}>
                <h1 className="bordered mb-2">Introduction</h1>
                <p className="lead m-0 px-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>   
              </Col>
              <Col lg={4} md={6}>
                <Image src={TokensIcon} height={60} />
                <h4 className="mt-4">Tokens</h4>
						    <p className="mt-3 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Col>
              <Col lg={4} md={6}>
                <Image src={CrystalsIcon} height={60} />
                <h4 className="mt-4">Crystals</h4>
						    <p className="mt-3 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Col>
              <Col lg={4} md={6}>
                <Image src={HypernodesIcon} height={60} />
                <h4 className="mt-4">Hypernodes</h4>
						    <p className="mt-3 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Col>
              <Col lg={4} md={6}>
                <Image src={BridgesIcon} height={60} />
                <h4 className="mt-4">Bridges</h4>
						    <p className="mt-3 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Col>
              <Col lg={4} md={6}>
                <Image src={SideChainsIcon} height={60} />
                <h4 className="mt-4">Sidechains</h4>
						    <p className="mt-3 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Col>
              <Col lg={4} md={6}>
                <Image src={ApplicationsIcon} height={60} />
                <h4 className="mt-4">Applications</h4>
						    <p className="mt-3 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Col>
              
            </Row>
          </Col>
        </Row>
      </Container>
  </Layout>
)

export default IndexPage
