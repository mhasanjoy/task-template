import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from 'assets/images/logo.png';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="bg-light navigation-component sticky-top">
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
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link className="navigation-link"><Link to='/home'>Home</Link></Nav.Link>
              <Nav.Link className="navigation-link"><Link to='/about-us'>About</Link></Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown" className="navigation-link">
                <NavDropdown.Item className="navigation-link"><Link to="/services">Services</Link></NavDropdown.Item>
                <NavDropdown.Item className="navigation-link"><Link to="/single-service">Service Detail</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Projects" id="navbarScrollingDropdown" className="navigation-link">
                <NavDropdown.Item className="navigation-link"><Link to="/projects">Projects</Link></NavDropdown.Item>
                <NavDropdown.Item className="navigation-link"><Link to="/projects-two">Projects Two</Link></NavDropdown.Item>
                <NavDropdown.Item className="navigation-link"><Link to="/single-project">Project Detail</Link></NavDropdown.Item>
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
              <Nav.Link className="me-3 navigation-link"><Link to="/contact">Contact</Link></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="navigation-btn"><BiSearch style={{ fontSize: '1.5rem' }} /></Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navigation;