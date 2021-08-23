import { Card, Col } from 'react-bootstrap';

interface IProps {
    data: {
        id: number;
        image: string;
        name: string;
    },
    handleClick: (name: string) => void;
}

const MarketingCard = (props: IProps) => {
    const { image, name } = props.data;

    return (
        <Col md={2}>
            <Card className="marketing-card justify-content-center align-items-center" onClick={() => props.handleClick(name)} >
                <Card.Img variant="top" src={image} className="marketing-card-image p-2" />
                <h6>{name}</h6>
            </Card>
        </Col>
    );
};

export default MarketingCard;