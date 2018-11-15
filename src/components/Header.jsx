import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div className="Header d-flex justify-content-between">
      <div className="text-left align-items-center">
        <h1>Nogada Develop Blog</h1>
        <h5 className="mt-2">Frontend, React, Javascript</h5>
      </div>
      <Nav className="align-items-end">
        <Link to="/">
          <NavItem className="NavItem">Home</NavItem>
        </Link>
        <Link to="/">
          <NavItem className="NavItem">About</NavItem>
        </Link>
      </Nav>

      <style jsx>{`
        .Header {
          color: #000000;
          opacity: 0.7;
          background-color: #6a6c6e;
          width: 100%;
          height: 200px;
          margin: 50px 0px;
          padding: 40px;
        }
        .NavItem {
          margin-left: 10px;
          color: black;
        }
      `}</style>
    </div>
  )
}
export default Header
