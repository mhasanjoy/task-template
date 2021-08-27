import CommonHeader from 'components/common/CommonHeader';
import { Col, Container, Row } from 'react-bootstrap';
import pic43 from 'assets/images/pic43.jpg';
import pic44 from 'assets/images/pic44.jpg';
import { TiTick } from 'react-icons/ti';

const SingleService = () => {
    return (
        <>
            <CommonHeader name='Service Details' />
            <div className="my-5">
                <Container>
                    <Row className="align-items-center py-5">
                        <Col md={6} className="py-3">
                            <h3 className="text-primary">Digital Marketing</h3>
                            <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
                            <h5 className="text-primary"><TiTick className="me-2" style={{ color: '#f00790' }} />Core Development</h5>
                            <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s</p>
                            <h5 className="text-primary"><TiTick className="me-2" style={{ color: '#f00790' }} />Define Your Choices</h5>
                            <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s.</p>
                        </Col>
                        <Col md={6} className="py-3">
                            <img src={pic43} className="w-100" alt="" />
                        </Col>
                    </Row>
                    <Row className="align-items-center py-5">
                        <Col md={6} className="py-3">
                            <img src={pic44} className="w-100" alt="" />
                        </Col>
                        <Col md={6} className="py-3">
                            <h3 className="text-primary my-3">Social Media Marketing</h3>
                            <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s.</p>
                            <h5 className="text-primary"><TiTick className="me-2" style={{ color: '#f00790' }} />Core Development</h5>
                            <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s</p>
                            <h5 className="text-primary"><TiTick className="me-2" style={{ color: '#f00790' }} />Define Your Choices</h5>
                            <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default SingleService;