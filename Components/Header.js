import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'React'



const Header = () => (
  <Navbar fixed="top" bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img width="30" height="35" src="https://www.agf.dk/frontend/images/logo.png"></img></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/posts">Posts</Nav.Link>
      <Nav.Link href="/skole">Skole</Nav.Link>
      <Nav.Link href="/items">Shop</Nav.Link>
    </Nav>
    <Navbar.Brand href="/cart">
      <img width="30" height="35" src="https://cdn.icon-icons.com/icons2/38/PNG/512/emptyshoppingcart_shopingcart_carritodelacompravacio_4565.png"></img>
    </Navbar.Brand>
  </Navbar >
);

export default Header;