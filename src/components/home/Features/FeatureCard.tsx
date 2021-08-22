import { Col, Row } from "react-bootstrap";

interface IProps{
    data: {
        id: number;
        image: string;
        name: string;
        description: string;
    }
}

const FeatureCard = (props: IProps) => {
    const {image, name, description} = props.data;

    return (
        <Row className="feature-card my-3 align-items-center">
            <Col md={3}>
                <img src={image} alt="" />
            </Col>
            <Col md={9}>
                <h3>{name}</h3>
                <p className="text-secondary">{description}</p>
            </Col>
        </Row>
    );
};

export default FeatureCard;