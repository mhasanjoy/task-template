import { Card, Col, Row } from 'react-bootstrap';

interface IProps {
    data: {
        id: number;
        image: string;
        date: string;
        name: string;
    }
}

const RecentPostsCard = (props: IProps) => {
    const { image, date, name } = props.data;

    return (
        <Row className="my-3">
            <Col md={4} className="py-3">
                <Card>
                    <img src={image} alt="" className="w-100" />
                </Card>
            </Col>
            <Col md={8} className="py-3">
                <Card style={{border: 'none'}}>
                    <p><small className="text-secondary">{date}</small></p>
                    <h6 className="text-primary text-highlight">{name}</h6>
                </Card>
            </Col>
        </Row>
    );
};

export default RecentPostsCard;