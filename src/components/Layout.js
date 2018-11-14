import React from 'react'
import { Link } from 'gatsby'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'reactstrap'
import Header from './Header'
import RightBar from './RightBar'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Container>
        <Header />
        <Row>
          <Col xs="12" md="8">
            {children}
          </Col>
          <Col xs="0" md="4">
            <RightBar />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Layout
