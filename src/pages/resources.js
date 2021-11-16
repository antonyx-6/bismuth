import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import NodeImage from "../images/core-bismuth-node.svg"
import HypernodeImage from "../images/core-bismuth-hypernode.svg"
import DragginatorImage from "../images/dapp-bismuth-dragginator.svg"
import EvMonitorImage from "../images/dapp-bismuth-ev-monitor.svg"
import DocShieldImage from "../images/dapp-bismuth-docshield.svg"

const ResourcesPage = () => (
  <Layout>
  <Seo title="Resources" />
  <div className="title-bar py-5" fluid>
    <Container>
      <h1 class="m-0">Resources</h1>
    </Container>
  </div>
  <Container>
    <div className="py-5">
      <Row className="gx-5">
        <Col lg={3}>
        <h2 className="side-heading">Core Agpps</h2>
        <p className="lead mt-3 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
        <Col lg={9}>
        <Row className="g-5">
          <Col lg={4} md={6}>
          <Card className="border-0 hover-tile h-100">
            <div>
              <Image src={NodeImage} alt="Node" className="card-img-top" fluid />
            </div>
            <Card.Body className="border">
              <Card.Title>
                <h4 className="my-1">
                  Bismuth Node
                </h4>
              </Card.Title>
              <Card.Text className="my-3">
                The backbone of the Bismuth proof-of-work network.
              </Card.Text>
              <div className="py-1">
                <span class="badge rounded-pill">Core App</span>
                <span class="badge rounded-pill">Node</span>
              </div>
            </Card.Body>
            <Card.Footer className="border border-top-0 bg-white">
              <a href="#" class="card-link">Installer</a>
              <a href="#" class="card-link">Source</a>
            </Card.Footer>
          </Card>
          </Col>
          <Col lg={4} md={6}>
          <Card className="border-0 hover-tile">
            <div>
              <Image src={HypernodeImage} alt="Hyperode" className="card-img-top" fluid />
            </div>
            <Card.Body className="border">
              <Card.Title>
                <h4 className="my-1">
                  Bismuth Hypernode
                </h4>
              </Card.Title>
              <Card.Text className="my-3">
                The backbone of the Bismuth proof-of-stake network.
              </Card.Text>
              <div className="py-1">
                <span class="badge rounded-pill">Core App</span>
                <span class="badge rounded-pill">Hypernode</span>
              </div>
            </Card.Body>
            <Card.Footer className="border border-top-0 bg-white">
              <a href="#" class="card-link">Installer</a>
              <a href="#" class="card-link">Source</a>
            </Card.Footer>
          </Card>
          </Col>
        </Row>
        </Col>
      </Row>
    </div>
  </Container>
  <hr className="m-0"/>
  <Container>
    <div className="py-5">
      <Row className="gx-5">
        <Col lg={3}>
        <h2 className="side-heading">dApps</h2>
        <p className="lead mt-3 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
        <Col lg={9}>
        <Row className="g-5">
          <Col lg={4} md={6}>
          <Card className="border-0 hover-tile h-100">
            <div>
              <Image src={DragginatorImage} alt="Dragginator" className="card-img-top" fluid />
            </div>
            <Card.Body className="border">
              <Card.Title>
                <h4 className="my-1">
                  Dragginator
                </h4>
              </Card.Title>
              <Card.Text className="my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <div className="py-1">
                <span class="badge rounded-pill">dApp</span>
                <span class="badge rounded-pill">Game</span>
              </div>
            </Card.Body>
            <Card.Footer className="border border-top-0 bg-white">
              <a href="#" class="card-link">Installer</a>
              <a href="#" class="card-link">Source</a>
            </Card.Footer>
          </Card>
          </Col>
          <Col lg={4} md={6}>
          <Card className="border-0 hover-tile h-100">
            <div>
              <Image src={EvMonitorImage} alt="EV Monitor" className="card-img-top" fluid />
            </div>
            <Card.Body className="border">
              <Card.Title>
                <h4 className="my-1">
                  EV Battery Monitor
                </h4>
              </Card.Title>
              <Card.Text className="my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </Card.Text>
              <div className="py-1">
                <span class="badge rounded-pill">dApp</span>
                <span class="badge rounded-pill">Utility</span>
              </div>
            </Card.Body>
            <Card.Footer className="border border-top-0 bg-white">
              <a href="#" class="card-link">Installer</a>
              <a href="#" class="card-link">Source</a>
            </Card.Footer>
          </Card>
          </Col>
          <Col lg={4} md={6}>
          <Card className="border-0 hover-tile h-100">
            <div>
              <Image src={DocShieldImage} alt="DocShield" className="card-img-top" fluid />
            </div>
            <Card.Body className="border">
              <Card.Title>
                <h4 className="my-1">
                  DocShield
                </h4>
              </Card.Title>
              <Card.Text className="my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <div className="py-1">
                <span class="badge rounded-pill">dApp</span>
                <span class="badge rounded-pill">Security</span>
              </div>
            </Card.Body>
            <Card.Footer className="border border-top-0 bg-white">
              <a href="#" class="card-link">Installer</a>
              <a href="#" class="card-link">Source</a>
            </Card.Footer>
          </Card>
          </Col>
        </Row>
        </Col>
      </Row>
    </div>
  </Container>
</Layout>
)

export default ResourcesPage
