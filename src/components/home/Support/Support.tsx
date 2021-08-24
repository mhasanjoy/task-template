import { Col, Row } from 'react-bootstrap';
import pic10 from 'assets/images/pic10.png';
import { TiTick } from 'react-icons/ti';

const Support = () => {
    return (
        <div className="my-5 py-5 support-component">
            <Row className="align-items-center">
                <Col lg={7}>
                    <p className="title">WHY CHOOSE US</p>
                    <h1>Outstanding Digital Experience</h1>
                    <p className="text-secondary mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <div className="d-flex mt-4 support">
                        <button className="tick-btn"><TiTick /></button>
                        <div>
                            <h5 className="text-primary">First Working Process</h5>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="d-flex support">
                        <button className="tick-btn"><TiTick /></button>
                        <div>
                            <h5 className="text-primary">Dedicated Team Member</h5>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="d-flex support">
                        <button className="tick-btn"><TiTick /></button>
                        <div>
                            <h5 className="text-primary">24/7 Support</h5>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <button className="my-4 pink-btn">Discover More</button>
                </Col>
                <Col lg={5}>
                    <img src={pic10} alt="Support Image" />
                </Col>
            </Row>
        </div>
    );
};

export default Support;