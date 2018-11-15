import React from 'react'
import { Nav, NavItem } from 'reactstrap'

const Header = () => {
  return (
    <div className="Header d-flex justify-content-between">
      <div className="text-left align-items-center">
        <h1>Nogada Develop Blog</h1>
        <h5 className="mt-2">Frontend, React, Javascript</h5>
      </div>
      <Nav className="align-items-end">
        <NavItem className="NavItem">Home</NavItem>
        <NavItem>About</NavItem>
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
          margin-right: 10px;
        }
      `}</style>
    </div>
  )
}
export default Header
