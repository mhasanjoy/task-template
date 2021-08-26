import { Card, Col, Row } from 'react-bootstrap';
import pic23 from 'assets/images/pic23.png';
import pic24 from 'assets/images/pic24.png';
import pic25 from 'assets/images/pic25.png';
import pic26 from 'assets/images/pic26.png';

const ServiceGroups = () => {
    return (
        <div className="my-5 py-5 align-items-stretch service-group-component">
            <h3 className="text-primary text-center mb-4">Trusted By Over 30,0000 world’s leading Companies</h3>
            <Row className="h-100">
                <Col lg={3} sm={6} className="py-3">
                    <Card className="group-image">
                        <Card.Img variant="top" src={pic23} />
                    </Card>
                </Col>
                <Col lg={3} sm={6} className="py-3">
                    <Card className="group-image">
                        <Card.Img variant="top" src={pic24} />
                    </Card>
                </Col>
                <Col lg={3} sm={6} className="py-3">
                    <Card className="group-image">
                        <Card.Img variant="top" src={pic25} />
                    </Card>
                </Col>
                <Col lg={3} sm={6} className="py-3">
                    <Card className="group-image">
                        <Card.Img variant="top" src={pic26} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceGroups;