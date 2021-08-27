import { Card, Col } from 'react-bootstrap';
import { GrUserAdmin } from 'react-icons/gr';
import { FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
        <Col lg={4} sm={6} className="h-100 pb-4">
            <Link to='/single-blog'>
                <Card className="blog-card">
                    <Card.Img variant="top" src={image} className="w-100" />
                    <Card.Body className="p-4">
                        <div className="d-flex gap-3 text-secondary">
                            <p><GrUserAdmin className="me-2" /><small>By Admin</small></p>
                            <p><FaRegComments className="me-2" /><small>3 comments</small></p>
                        </div>
                        <Card.Title className="text-primary card-title">{name}</Card.Title>
                        <Card.Text className="text-secondary">{description}</Card.Text>
                        <button className="pink-btn">Read More</button>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default BlogCard;