import { Col, Row } from "react-bootstrap";

const CommonNewsletter = () => {
    return (
        <div className="common-newsletter-component">
            <Row className='common-newsletter d-flex align-items-center justify-content-center'>
                <Col md={8} className="text-center text-white">
                    <p>Get Started Instantly!</p>
                    <h2 className="mb-3">Get the only new update from this newsletter</h2>
                    <form className="d-flex justify-content-center">
                        <input className="form-control w-75" type="email" name="email" placeholder="Enter your Email" required />
                        <button className="pink-btn">Subscribe</button>
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default CommonNewsletter;