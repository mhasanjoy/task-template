import { Card, Col } from 'react-bootstrap';
import { RiArrowRightSLine } from 'react-icons/ri';

interface IProps {
    data: {
        id: number;
        image: string;
        name: string;
        description: string;
    }
}

const SpecializationCard = (props: IProps) => {
    const { image, name, description } = props.data;

    return (
        <Col md={4}>
            <Card className="h-100 specialization-card align-items-stretch pb-3">
                <Card.Img variant="top" src={image} className="card-image h-100" />
                <Card.Body className="text-center">
                    <Card.Title className="card-title">{name}</Card.Title>
                    <Card.Text className="text-secondary">{description}</Card.Text>
                    <button className="button mt-3"><RiArrowRightSLine style={{fontSize: '2rem'}} /></button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SpecializationCard;