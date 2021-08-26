import { Col, Container, Row } from 'react-bootstrap';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-component">
                <Container className="py-5">
                    <Row className="py-5 text-white">
                        <Col xl={4} md={8} className="py-4">
                            <h5>About Us</h5>
                            <hr />
                            <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                            <div className="pt-3">
                                <button className="social-icon"><FaLinkedinIn /></button>
                                <button className="social-icon"><FaFacebookF /></button>
                                <button className="social-icon"><AiOutlineTwitter /></button>
                                <button className="social-icon"><FaInstagram /></button>
                            </div>
                        </Col>
                        <Col xl={2} md={4} className="py-4">
                            <h5>Important Links</h5>
                            <hr />
                            <p className="pt-3"><Link to='/about-us'>About Us</Link></p>
                            <p><Link to="/projects">Project</Link></p>
                            <p><Link to="/services">Services</Link></p>
                            <p><Link to='/team'>Team</Link></p>
                            <p><Link to='/contact'>Contact</Link></p>
                        </Col>
                        <Col xl={2} md={4} className="py-4">
                            <h5>Featured Service</h5>
                            <hr />
                            <p className="pt-3"><Link to='/single-service'>SEO Marketing</Link></p>
                            <p><Link to='/single-service'>SEO Services</Link></p>
                            <p><Link to='/single-service'>Services</Link></p>
                            <p><Link to='/single-service'>Pay-Per-Click</Link></p>
                            <p><Link to='/single-service'>Social Media</Link></p>
                        </Col>
                        <Col xl={4} md={8} className="py-4">
                            <h5>Contact</h5>
                            <hr />
                            <div className="d-flex gap-3 py-2 align-items-center">
                                <FaPhoneAlt />
                                <div>
                                    <h6>Phone</h6>
                                    <p>(882) 569-7565</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 py-2 align-items-center">
                                <FaRegEnvelope />
                                <div>
                                    <h6>Email</h6>
                                    <p>hello@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 py-2 align-items-center">
                                <GoLocation />
                                <div>
                                    <h6>Address</h6>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="credits text-white">
                <Container className="py-4 d-flex align-items-center justify-content-between">
                    <p>&copy; {new Date().getFullYear()} Task. All Rights Reserved by Md. Mehedi Hasan</p>
                    <p>
                        <Link to='/terms-conditions'>Terms &amp; Conditions</Link>
                        <span> | </span>
                        <Link to='/privacy-policy'>Privacy Policy</Link>
                    </p>
                </Container>
            </div>
        </>
    );
};

export default Footer;