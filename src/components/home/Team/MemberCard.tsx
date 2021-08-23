import { Card, Col } from 'react-bootstrap';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

interface IProps {
    data: {
        id: number;
        image: string;
        name: string;
        position: string;
    }
}

const MemberCard = (props: IProps) => {
    const { image, name, position } = props.data;

    return (
        <Col md={4} className="h-100">
            <Card className="member-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="name">{name}</Card.Title>
                    <Card.Text className="text-secondary">{position}</Card.Text>
                    <button className="social-icon"><FaLinkedinIn /></button>
                    <button className="social-icon"><FaFacebookF /></button>
                    <button className="social-icon"><AiOutlineTwitter /></button>
                    <button className="social-icon"><FaInstagram /></button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MemberCard;