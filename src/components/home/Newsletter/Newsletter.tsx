import { Col, Row } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <div className="mt-5 pt-5 newsletter-component">
            <Row className="align-items-center">
                <Col md={6}>
                    <h3>Sign Up For Newsletter</h3>
                    <p className="text-secondary">And Receive 40% Discount On First Project</p>
                </Col>
                <Col md={6}>
                    <form>
                        <Row className="align-items-center">
                            <Col md={8}>
                                <input type="email" name="email" placeholder="Enter your email" className="form-control subscribe-input" required />
                            </Col>
                            <Col md={4}>
                                <input type="submit" value="Subscribe Now" className="subscribe-btn" />
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Newsletter;