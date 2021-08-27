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
              <Nav.Link><Link to='/home' className="navigation-link">Home</Link></Nav.Link>
              <Nav.Link><Link to='/about-us' className="navigation-link">About</Link></Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown" className="navigation-link">
                <NavDropdown.Item><Link to="/services" className="navigation-link">Services</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/single-service" className="navigation-link">Service Detail</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Projects" id="navbarScrollingDropdown" className="navigation-link">
                <NavDropdown.Item><Link to="/projects" className="navigation-link">Projects</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/projects-two" className="navigation-link">Projects Two</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/single-project" className="navigation-link">Project Detail</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="navbarScrollingDropdown" className="navigation-link">
                <NavDropdown.Item><Link to='/blog' className="navigation-link">Blog</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/single-blog" className="navigation-link">Blog Detail</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="navigation-link" title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item><Link to="/features" className="navigation-link">Features</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/team" className="navigation-link">Team</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to='/pricing' className="navigation-link">Pricing</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to='/faq' className="navigation-link">FAQ</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="*" className="navigation-link">404 Error</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link><Link to="/contact" className="me-3 navigation-link">Contact</Link></Nav.Link>
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