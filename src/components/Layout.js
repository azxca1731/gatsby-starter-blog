import React from 'react'
import { Helmet } from 'react-helmet'
import '../assets/bootstrap.min.css'
import { Container, Row, Col } from 'reactstrap'
import Header from './Header'
import Footer from './Foooter'
import RightBar from './RightBar'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Row>
          <Col xs="12" md="8">
            {children}
          </Col>
          <Col xs="0" md="4">
            <RightBar />
          </Col>
        </Row>
      )
    } else {
      header = (
        <Row>
          <Col xs="12">{children}</Col>
        </Row>
      )
    }
    return (
      <Container>
        <Header />
        {header}
        <Footer />
      </Container>
    )
  }
}

export default Layout
