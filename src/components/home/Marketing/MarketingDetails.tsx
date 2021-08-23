import { Col, Row } from 'react-bootstrap';
import pic30 from 'assets/images/pic30.png';

interface IProps {
    data: {
        id: number;
        image: string;
        name: string;
        description: string;
    }
}

const MarketingDetails = (props: IProps) => {
    const { image, name, description } = props.data;

    return (
        <Row className="mt-5 marketing-details-component align-items-center">
            <Col md={5}>
                <img src={image} alt="" className="marketing-image w-100 p-2" />
            </Col>
            <Col md={7}>
                <h4>{name}</h4>
                <p className="text-secondary">{description}</p>
                <Row>
                    <Col md={6} className="d-flex gap-2">
                        <img src={pic30} alt="" className="w-25 h-50" />
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </Col>
                    <Col md={6} className="d-flex gap-2">
                        <img src={pic30} alt="" className="w-25 h-50" />
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </Col>
                </Row>
                <button>Discover More</button>
            </Col>
        </Row>
    );
};

export default MarketingDetails;