import { Col, Row } from 'react-bootstrap';
import pic5 from 'assets/images/pic5.png';

const About = () => {
    return (
        <div className="my-5 py-5 about-component align-items-stretch">
            <Row className="h-100 align-items-center">
                <Col md={6} className="pb-3">
                    <img src={pic5} alt="About Image" />
                </Col>
                <Col md={6}>
                    <p className="title">ABOUT US</p>
                    <h1>We are Dynamic Team of SEO Agency</h1>
                    <h6 className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.</h6>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="d-flex gap-5 mt-4">
                        <div>
                            <h2>1,165<span>+</span></h2>
                            <h5 className="text-secondary">Project Completed</h5>
                        </div>
                        <div>
                            <h2>2,665<span>+</span></h2>
                            <h5 className="text-secondary">Satisfied Clients</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About;