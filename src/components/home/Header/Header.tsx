import { Col, Row } from 'react-bootstrap';
import pic1 from 'assets/images/pic1.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Row className="header-component align-items-center py-5 mb-5">
            <Col md={6}>
                <h1>Digital Agency with Excellent Service</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore.</p>
                <Link to='about-us'><button className="pink-btn mb-5">More About Us</button></Link>
            </Col>
            <Col md={6}>
                <img src={pic1} alt="Header Image" />
            </Col>
        </Row>
    );
};

export default Header;