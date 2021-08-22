import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from 'assets/images/logo.png';
import { BiSearch } from 'react-icons/bi';

const Navigation = () => {
  return (
    <div className="bg-light navigation">
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand>
            <div className="d-flex align-items-center gap-3">
              <img src={logo} alt="Logo" />
              <h1>Task</h1>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 gap-3"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" className="navigation-link">Home</Nav.Link>
              <Nav.Link href="#action1" className="navigation-link">About</Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown" className="navigation-link">
                <NavDropdown.Item href="#action2" className="navigation-link">Services</NavDropdown.Item>
                <NavDropdown.Item href="#action3" className="navigation-link">Service Detail</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Projects" id="navbarScrollingDropdown" className="navigation-link">
                <NavDropdown.Item href="#action4" className="navigation-link">Projects</NavDropdown.Item>
                <NavDropdown.Item href="#action5" className="navigation-link">Project Detail</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="navbarScrollingDropdown" className="navigation-link">
                <NavDropdown.Item href="#action6" className="navigation-link">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action7" className="navigation-link">Blog Detail</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="navigation-link" title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action8" className="navigation-link">Features</NavDropdown.Item>
                <NavDropdown.Item href="#action9" className="navigation-link">Team</NavDropdown.Item>
                <NavDropdown.Item href="#action10" className="navigation-link">Pricing</NavDropdown.Item>
                <NavDropdown.Item href="#action11" className="navigation-link">FAQ</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action12" className="me-3 navigation-link">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success"><BiSearch /></Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navigation;