import { Col, Row } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <div className="mt-5 pt-5 newsletter-component">
            <Row className="align-items-center">
                <Col lg={6} className="py-2">
                    <h3 className="text-primary">Sign Up For Newsletter</h3>
                    <p className="text-secondary">And Receive 40% Discount On First Project</p>
                </Col>
                <Col lg={6} className="py-2">
                    <form>
                        <Row className="align-items-center">
                            <Col md={8} className="py-2">
                                <input type="email" name="email" placeholder="Enter your email" className="form-control subscribe-input" required />
                            </Col>
                            <Col md={4} className="py-2">
                                <input type="submit" value="Subscribe Now" className="pink-btn" />
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Newsletter;