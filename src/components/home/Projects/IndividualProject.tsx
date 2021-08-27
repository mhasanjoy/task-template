import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IProps {
    data: {
        id: number;
        image: string;
        name: string;
    }
}

const IndividualProject = (props: IProps) => {
    const { image, name } = props.data;

    return (
        <Col xl={4} md={6} className="h-100 mb-5">
            <Link to='/single-project'>
                <Card className="individual-project">
                    <Card.Img variant="top" src={image} className="card-image" />
                    <Card.Body className="card-title">
                        <Card.Title className="d-flex justify-content-center">{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default IndividualProject;