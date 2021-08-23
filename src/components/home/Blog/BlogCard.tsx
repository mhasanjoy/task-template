import { Card, Col } from 'react-bootstrap';
import { GrUserAdmin } from 'react-icons/gr';
import { FaRegComments } from 'react-icons/fa';

interface IProps {
    data: {
        id: number;
        image: string;
        name: string;
        description: string;
    }
}

const BlogCard = (props: IProps) => {
    const { image, name, description } = props.data;

    return (
        <Col md={4} className="h-100">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <div className="d-flex gap-3">
                        <p><GrUserAdmin /><small>By Admin</small></p>
                        <p><FaRegComments /><small>3 comments</small></p>
                    </div>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-secondary">{description}</Card.Text>
                    <button>Read More</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BlogCard;