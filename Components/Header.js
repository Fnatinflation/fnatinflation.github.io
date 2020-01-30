import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';




const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img width="30" height="35" src="https://www.agf.dk/frontend/images/logo.png"></img></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/front">Home</Nav.Link>
      <Nav.Link href="/posts">Posts</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;