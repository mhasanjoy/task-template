import { Card, Col } from 'react-bootstrap';

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
        <Col md={4} className="h-100 mb-5">
            <Card className="individual-project">
                <Card.Img variant="top" src={image} className="card-image" />
                <Card.Body className="card-title">
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default IndividualProject;