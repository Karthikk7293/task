import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <Navbar className='main-header py-4'  collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand ><h2 className='logo'>F<span className='text-danger'>oo</span>dy</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to={'/'}>HOME</Link></Nav.Link>
            <Nav.Link ><Link to={'/'}>MENU</Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'}>CART</Link></Nav.Link>
            <Nav.Link >ABOUT US</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >LOGIN</Nav.Link>
            <Nav.Link href="#deets">SIGN UP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header