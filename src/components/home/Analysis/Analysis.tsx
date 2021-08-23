import { Col, Row } from 'react-bootstrap';
import pic22 from 'assets/images/pic22.png';

const Analysis = () => {
    return (
        <div className="my-5 py-5 analysis-component">
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={pic22} alt="Analysis Image" />
                </Col>
                <Col md={6}>
                    <p className="title">ANALYSIS</p>
                    <h1>Get Free SEO Analysis</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <form>
                        <Row className="py-2">
                            <Col md={6} className="py-2">
                                <input type="text" name="name" placeholder="Your Name*" required className="form-control" />
                            </Col>
                            <Col md={6} className="py-2">
                                <input type="email" name="email" placeholder="Email*" required className="form-control" />
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col md={6} className="py-2">
                                <input type="number" name="phone" placeholder="Phone*" required className="form-control" />
                            </Col>
                            <Col md={6} className="py-2">
                                <input type="text" name="website" placeholder="Website*" required className="form-control" />
                            </Col>
                        </Row>
                        <input type="submit" value="Send Message" className="message-btn mt-3" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Analysis;