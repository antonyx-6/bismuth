import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

import qTradeExchange from "../images/exchange-qtrade-logo.svg"
import GraviexExchange from "../images/exchange-graviex-logo.svg"
import FixexboxExchange from "../images/exchange-finexbox-logo.svg"
import ViteExchange from "../images/exchange-vite-logo.svg"
import PancakeExchange from "../images/exchange-pancakeswap-logo.svg"
import UniswapExchange from "../images/exchange-uniswap-logo.svg"

const ExchangesPage = () => (
  <Layout>
  <Seo title="Resources" />
  <div className="title-bar py-5" fluid>
    <Container>
      <h1 class="m-0">Buy Bismuth</h1>
    </Container>
  </div>
  <Container className="py-5">
  <h2 className="side-heading mb-5">Centralized Exchanges</h2>
    <Row className="g-5">
      <Col xs={12}>
        <div>
          <Card className="border-0">
            <Row className="g-0 hover-tile">
              <Col md={4} className="exchange-logo d-flex flex-wrap align-items-center p-5">
                <Image src={qTradeExchange} fluid/>
              </Col>
              <Col md={8} className="p-3 border">
                <Card.Body>
                  <Card.Title>
                    <h4 className="my-1">
                      qTrade
                    </h4>
                  </Card.Title>
                  <Card.Text className="my-3 lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <p class="card-text mb-4"><small class="text-muted">TRADING PAIR: BTC/BIS</small></p>
                  <Button variant="primary" size="md" >
                    qTrade Exchange
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </Col>
      <Col xs={12}>
        <div>
          <Card className="border-0">
            <Row className="g-0 hover-tile">
              <Col md={4} className="exchange-logo d-flex flex-wrap align-items-center p-5">
                <Image src={GraviexExchange} fluid/>
              </Col>
              <Col md={8} className="p-3 border">
              <Card.Body>
                  <Card.Title>
                    <h4 className="my-1">
                      Graviex
                    </h4>
                  </Card.Title>
                  <Card.Text className="my-3 lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <p class="card-text mb-4"><small class="text-muted">TRADING PAIR: BTC/BIS</small></p>
                  <Button variant="primary" size="md" >
                    Graviex Exchange
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </Col>
      <Col xs={12}>
        <div>
          <Card className="border-0">
            <Row className="g-0 hover-tile">
              <Col md={4} className="exchange-logo d-flex flex-wrap align-items-center p-5">
                <Image src={FixexboxExchange} fluid/>
              </Col>
              <Col md={8} className="p-3 border">
              <Card.Body>
                  <Card.Title>
                    <h4 className="my-1">
                      FinexBox
                    </h4>
                  </Card.Title>
                  <Card.Text className="my-3 lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <p class="card-text mb-4"><small class="text-muted">TRADING PAIR: BTC/BIS</small></p>
                  <Button variant="primary" size="md" >
                  FinexBox Exchange
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </Col>
    </Row>
  </Container>
  <hr className="m-0"/>
  <Container>

    <h2 className="side-heading my-5">Decentralized Exchanges (DEX)</h2>


    <Row className="g-5">
      <Col xs={12}>
        <div>
          <Card className="border-0">
            <Row className="g-0 hover-tile">
              <Col md={4} className="exchange-logo d-flex flex-wrap align-items-center p-5">
                <Image src={UniswapExchange} fluid/>
              </Col>
              <Col md={8} className="p-3 border">
                <Card.Body>
                  <Card.Title>
                    <h4 className="my-1">
                      UniSwap
                    </h4>
                  </Card.Title>
                  <Card.Text className="my-3 lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <p class="card-text mb-4"><small class="text-muted">TRADING PAIR: ETH/wBIS</small></p>
                  <Button variant="primary" size="md" >
                    UniSwap Exchange
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </Col>
      <Col xs={12}>
        <div>
          <Card className="border-0">
            <Row className="g-0 hover-tile">
              <Col md={4} className="exchange-logo d-flex flex-wrap align-items-center p-5">
                <Image src={PancakeExchange} fluid/>
              </Col>
              <Col md={8} className="p-3 border">
              <Card.Body>
                  <Card.Title>
                    <h4 className="my-1">
                      PancakeSwap
                    </h4>
                  </Card.Title>
                  <Card.Text className="my-3 lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <p class="card-text mb-4"><small class="text-muted">TRADING PAIR: BSC/wBIS</small></p>
                  <Button variant="primary" size="md" >
                    PancakeSwap Exchange
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </Col>
      <Col xs={12}>
        <div>
          <Card className="border-0">
            <Row className="g-0 hover-tile">
              <Col md={4} className="exchange-logo d-flex flex-wrap align-items-center p-5">
                <Image src={ViteExchange} fluid/>
              </Col>
              <Col md={8} className="p-3 border">
              <Card.Body>
                  <Card.Title>
                    <h4 className="my-1">
                      Vite
                    </h4>
                  </Card.Title>
                  <Card.Text className="my-3 lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <p class="card-text mb-4"><small class="text-muted">TRADING PAIR: BTC-000/BIS-000</small></p>
                  <Button variant="primary" size="md" >
                  Vite Exchange
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </Col>
    </Row>
    
  </Container>
</Layout>
)

export default ExchangesPage
