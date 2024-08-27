import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar className="">
      <Container>
        <Navbar.Brand href="/">MERN Assessment</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <span>USername</span>
         <a>Login</a>
         <a>Signup</a>
         <a>Logout</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;