import React, { useState } from 'react';
import { Navbar, Nav, InputGroup, FormControl } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  const [searchString, setSearchString] = useState('');

//   const searchStringHandler = (e) => {
//     if (e.keyCode === 13) {
      
//       console.log('Search:', searchString);
//     } else {
//       setSearchString(e.currentTarget.value);
//     }
//   };

  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#FF0000' }}>
      <Navbar.Brand>
        <img
          src="https://www.arpa.piemonte.it/app/logo-app-meteo/image"
          alt="logo"
          style={{ width: '80px', height: '55px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="nav-link font-weight-bold">Home</Nav.Link>
          <Nav.Link className="nav-link font-weight-bold">Link</Nav.Link>
          <Nav.Link className="nav-link font-weight-bold">Contacts</Nav.Link>
          <Nav.Link className="nav-link font-weight-bold">Details</Nav.Link>
        </Nav>
        <span className="d-flex align-items-center">
          {/* <InputGroup className="icons">
            <FormControl
              placeholder="Search and press enter"
              aria-label="search"
              aria-describedby="basic-addon1"
              onKeyDown={searchStringHandler}
              onChange={(e) => setSearchString(e.target.value)}
              value={searchString}
            />
          </InputGroup> */}
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
