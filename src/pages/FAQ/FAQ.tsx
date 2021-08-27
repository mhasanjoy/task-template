import CommonHeader from 'components/common/CommonHeader';
import CommonNewsletter from 'components/common/CommonNewsletter';
import ServiceGroups from 'components/home/ServiceGroups/ServiceGroups';
import { Card, Col, Container, Row } from 'react-bootstrap';
import pic22 from 'assets/images/pic22.png';
import { IoIosArrowForward } from 'react-icons/io';

const FAQ = () => {
    return (
        <>
            <CommonHeader name='FAQ' />
            <Container className="my-5 py-5 faq-component">
                <Row className="align-items-center">
                    <Col md={6}>
                        <p className="title">FAQ</p>
                        <h1>Frequently Asked Questions</h1>
                        <Card className="p-3 mt-5 faq-card">
                            <details>
                                <summary><h6 className="text-primary"><IoIosArrowForward />What harsh truths do you prefer to ignore?</h6></summary>
                                <p className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </details>
                        </Card>
                        <Card className="p-3 mt-3 faq-card">
                            <details>
                                <summary><h6 className="text-primary"><IoIosArrowForward />Is free will real or just an illusion?</h6></summary>
                                <p className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </details>
                        </Card>
                        <Card className="p-3 mt-3 faq-card">
                            <details>
                                <summary><h6 className="text-primary"><IoIosArrowForward />Does the price go up as my team gets larger?</h6></summary>
                                <p className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </details>
                        </Card>
                        <Card className="p-3 mt-3 faq-card">
                            <details>
                                <summary><h6 className="text-primary"><IoIosArrowForward />How long does it take for equipment to be delivered?</h6></summary>
                                <p className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </details>
                        </Card>
                        <Card className="p-3 mt-3 faq-card">
                            <details>
                                <summary><h6 className="text-primary"><IoIosArrowForward />I’m a developer, how do I become a Glass Partner?</h6></summary>
                                <p className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </details>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <img src={pic22} alt="" />
                    </Col>
                </Row>
            </Container>
            <CommonNewsletter />
            <Container>
                <ServiceGroups />
            </Container>
        </>
    );
};

export default FAQ;