import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface IProps {
    data: {
        id: number;
        image: string;
        name: string;
        description: string;
    }
}

const FeatureCard = (props: IProps) => {
    const { image, name, description } = props.data;

    return (
        <Link to='/single-service'>
            <Row className="feature-card my-3 align-items-center">
                <Col sm={3} className="d-flex justify-content-center">
                    <img src={image} alt="" />
                </Col>
                <Col sm={9}>
                    <h3 className="text-primary">{name}</h3>
                    <p className="text-secondary">{description}</p>
                </Col>
            </Row>
        </Link>
    );
};

export default FeatureCard;