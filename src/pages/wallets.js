import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

import BismuthWalletIcon from "../images/bismuth-wallet-icon.svg"

import { FaDesktop, FaMobileAlt, FaRegCheckCircle, FaWindows, FaApple, FaLinux } from 'react-icons/fa'
import { RiFilePaperLine } from 'react-icons/ri'
import { DiAndroid } from 'react-icons/di'

const WalletsPage = () => (
<Layout>
  <Seo title="Wallets" />
  <div className="title-bar py-5" fluid>
    <Container>
      <h1 class="m-0">Wallets</h1>
    </Container>
  </div>
  <Container>
    <div className="py-5">
      <Row className="g-5">
        <Col lg={6}>
        <Card className="h-100 hover-tile">
          <Card.Header className="align-items-center justify-content-center">
            <div className="d-flex">
              <div>
                <Image src={BismuthWalletIcon} height={30} className="me-3"/>
              </div>
              <div>
                <h4 className="my-0">TornadoWallet</h4>
              </div>
              <div className="ms-auto">
                <FaDesktop size={28} className="icon-purple"/>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <p className="lead mt-2 mb-4">A Python/HTML wallet based on the Tornado framework. Available in several languages.</p>
            <Row>
              <Col>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Explore dApps</span>
              </div>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Swap tokens</span>
              </div>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Transaction limits</span>
              </div>
              <div className="mb-3">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Multi-sig protection</span>
              </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <FaWindows size={28} className="icon-blue me-2 mt-1"/>
                <FaApple size={30} className="icon-blue me-2"/>
              </div>
              <div>
                <Button variant="primary" size="lg" >
                More Info
                </Button>
              </div>
            </div>
          </Card.Footer>
        </Card>
        </Col>
        <Col lg={6}>
        <Card className="h-100 hover-tile">
          <Card.Header className="align-items-center justify-content-center">
            <div className="d-flex">
              <div>
                <Image src={BismuthWalletIcon} height={30} className="me-3"/>
              </div>
              <div>
                <h4 className="my-0">my Bismuth Wallet</h4>
              </div>
              <div className="ms-auto">
                <FaMobileAlt size={28} className="icon-purple"/>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <p className="lead mt-2 mb-4">An Android mobile wallet with NFT and token support.</p>
            <Row>
              <Col>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Explore dApps</span>
              </div>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Swap tokens</span>
              </div>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Transaction limits</span>
              </div>
              <div className="mb-3">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Multi-sig protection</span>
              </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <DiAndroid size={30} className="icon-blue me-2 mt-1"/>
              </div>
              <div>
                <Button variant="primary" size="lg" >
                More Info
                </Button>
              </div>
            </div>
          </Card.Footer>
        </Card>
        </Col>
        <Col lg={6}>
        <Card className="h-100 hover-tile">
          <Card.Header className="align-items-center justify-content-center">
            <div className="d-flex">
              <div>
                <Image src={BismuthWalletIcon} height={30} className="me-3"/>
              </div>
              <div>
                <h4 className="my-0">BIS Paper</h4>
              </div>
              <div className="ms-auto">
                <RiFilePaperLine size={28} className="icon-purple"/>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <p className="lead mt-2 mb-4">A simple HD paper wallet using the ECDSA keys scheme.</p>
            <Row>
              <Col>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Explore dApps</span>
              </div>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Swap tokens</span>
              </div>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Transaction limits</span>
              </div>
              <div className="mb-3">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Multi-sig protection</span>
              </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
              </div>
              <div>
                <Button variant="primary" size="lg" >
                More Info
                </Button>
              </div>
            </div>
          </Card.Footer>
        </Card>
        </Col>
        <Col lg={6}>
        <Card className="h-100 hover-tile">
          <Card.Header className="align-items-center justify-content-center">
            <div className="d-flex">
              <div>
                <Image src={BismuthWalletIcon} height={30} className="me-3"/>
              </div>
              <div>
                <h4 className="my-0">tk-wallet</h4>
              </div>
              <div className="ms-auto">
                <FaDesktop size={28} className="icon-purple"/>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <p className="lead mt-2 mb-4">A legacy wallet for Bismuth, lightweight and sequential.</p>
            <Row>
              <Col>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Explore dApps</span>
              </div>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Swap tokens</span>
              </div>
              <div className="mb-2">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Transaction limits</span>
              </div>
              <div className="mb-3">
                <FaRegCheckCircle size={21} className="me-2 icon-purple" />
                <span className="bullet-list">Multi-sig protection</span>
              </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <FaWindows size={28} className="icon-blue me-2 mt-1"/>
                <FaLinux size={28} className="icon-blue me-2 mt-1"/>
              </div>
              <div>
                <Button variant="primary" size="lg" >
                More Info
                </Button>
              </div>
            </div>
          </Card.Footer>
        </Card>
        </Col>
      </Row>
    </div>
  </Container>
</Layout>
)

export default WalletsPage
