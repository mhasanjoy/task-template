import CommonHeader from 'components/common/CommonHeader';
import CommonNewsletter from 'components/common/CommonNewsletter';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaPhoneAlt, FaRegEnvelope, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { AiOutlineTwitter } from 'react-icons/ai';

const contactData = [
    {
        id: 1,
        icon: <FaPhoneAlt className="contact-icon" style={{ fontSize: '2rem' }} />,
        name: 'Phone / Fax',
        address: '(882) 569-7565'
    },
    {
        id: 2,
        icon: <FaRegEnvelope className="contact-icon" style={{ fontSize: '2rem' }} />,
        name: 'E-mail',
        address: 'hello@example.com'
    },
    {
        id: 3,
        icon: <GoLocation className="contact-icon" style={{ fontSize: '2rem' }} />,
        name: 'Location',
        address: 'Dhaka, Bangladesh'
    }
];

const Contact = () => {
    return (
        <>
            <CommonHeader name='Contact' />
            <Container className="my-5 py-5">
                <Row>
                    <Col md={4} className="py-3">
                        <Card className="p-3 align-items-center contact-card">
                            <div className='d-flex gap-4 align-items-center'>
                                {contactData[0].icon}
                                <div>
                                    <h4 className="text-primary">{contactData[0].name}</h4>
                                    <p className="text-secondary">{contactData[0].address}</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="py-3">
                        <Card className="p-3 align-items-center contact-card">
                            <div className='d-flex gap-4 align-items-center'>
                                {contactData[1].icon}
                                <div>
                                    <h4 className="text-primary">{contactData[1].name}</h4>
                                    <p className="text-secondary">{contactData[1].address}</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="py-3">
                        <Card className="p-3 align-items-center contact-card">
                            <div className='d-flex gap-4 align-items-center'>
                                {contactData[2].icon}
                                <div>
                                    <h4 className="text-primary">{contactData[2].name}</h4>
                                    <p className="text-secondary">{contactData[2].address}</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-5 py-5 align-items-center">
                    <Col md={6} className="py-3">
                        <h3 className="text-primary">Get in Touch</h3>
                        <p className="text-secondary">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam tempus magna vel turpis pharetra dictum.</p>
                        <p className="text-secondary">Sed blandit tempus purus, sed sodales leo rutrum vel. Nam vulputate ipsum ac est congue, eget commodo magna lobortis.</p>
                        <div className="pt-3">
                            <button className="social-icon"><FaLinkedinIn /></button>
                            <button className="social-icon"><FaFacebookF /></button>
                            <button className="social-icon"><AiOutlineTwitter /></button>
                            <button className="social-icon"><FaInstagram /></button>
                        </div>
                    </Col>
                    <Col md={6} className="py-3">
                        <input type="text" name="name" placeholder="Name" className="form-control py-2" required />
                        <input type="email" name="email" placeholder="Email" className="form-control my-3 py-2" required />
                        <input type="text" name="subject" placeholder="Subject" className="form-control py-2" required />
                        <textarea name="message" cols={30} rows={6} placeholder="Your Message" className="form-control my-3 py-2" required></textarea>
                        <button className="pink-btn">Send Message</button>
                    </Col>
                </Row>
            </Container>
            <CommonNewsletter />
        </>
    );
};

export default Contact;