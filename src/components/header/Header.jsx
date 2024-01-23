import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';


export default function Header() {
  return (
    <>
    
    <Navbar expand="lg" className='container-top'  >
      <Container >
        {/* <Navbar.Brand href="#home" style={{color:'red'}}><b>Acctav</b></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='/'>
              <img src='./images/acctavlogo2.gif' alt='logo' className='clogo' />
            </Nav.Link>
            <NavDropdown title='Home'>home</NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/2.1">what's New</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">
                Consulting
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">Acctav Private</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.4">
                  Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Insights" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Spotlights</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Topics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Industries</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                  Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Careers" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Career</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">
                Students
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Professionals</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.4">
                  Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/5.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/5.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/5.4">
                  Separated link
              </NavDropdown.Item>  
            </NavDropdown> */}
            
          </Nav>
          <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit" >Search</button>
           </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Header /> */}
    </>
  )
}
