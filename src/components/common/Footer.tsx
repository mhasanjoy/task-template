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
                            <p className="pt-3"><a href="#action13">About Us</a></p>
                            <p><a href="#action14">Project</a></p>
                            <p><a href="#action15">Services</a></p>
                            <p><a href="#action16">Team</a></p>
                            <p><a href="#action17">Contact</a></p>
                        </Col>
                        <Col xl={2} md={4} className="py-4">
                            <h5>Featured Service</h5>
                            <hr />
                            <p className="pt-3"><a href="#action18">SEO Marketing</a></p>
                            <p><a href="#action19">SEO Services</a></p>
                            <p><a href="#action20">Services</a></p>
                            <p><a href="#action21">Pay-Per-Click</a></p>
                            <p><a href="#action22">Social Media</a></p>
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