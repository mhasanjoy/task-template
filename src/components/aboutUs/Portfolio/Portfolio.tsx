import pic48 from 'assets/images/pic48.png';
import pic49 from 'assets/images/pic49.png';
import pic50 from 'assets/images/pic50.png';
import pic51 from 'assets/images/pic51.png';
import pic52 from 'assets/images/pic52.png';
import pic53 from 'assets/images/pic53.png';
import pic54 from 'assets/images/pic54.png';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const portfolioData = [
    {
        id: 1,
        image: pic48,
        name: 'Branding'
    },
    {
        id: 2,
        image: pic50,
        name: 'SEO'
    },
    {
        id: 3,
        image: pic53,
        name: 'Digital Marketing'
    },
    {
        id: 4,
        image: pic49,
        name: 'Marketing'
    },
    {
        id: 5,
        image: pic51,
        name: 'Web Design'
    },
    {
        id: 6,
        image: pic54,
        name: 'IT Marketing'
    },
    {
        id: 7,
        image: pic52,
        name: 'Web Development'
    }
];


const Portfolio = () => {
    return (
        <div className="my-5 py-5">
            <div className="text-center mb-5 pb-3">
                <p className="title">PORTFOLIO</p>
                <h1>Our Project For Client</h1>
            </div>
            <div className="align-items-stretch">
                <Row className="h-100">
                    <Col xl={4} md={6}>
                        <Link to="/single-project">
                            <Card className='individual-portfolio my-3'>
                                <Card.Img variant="top" src={portfolioData[0].image} className="card-image" />
                                <Card.Body className="card-title">
                                    <Card.Title className="d-flex justify-content-center">{portfolioData[0].name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to='/single-project'>
                            <Card className='individual-portfolio my-3'>
                                <Card.Img variant="top" src={portfolioData[3].image} className="card-image" />
                                <Card.Body className="card-title">
                                    <Card.Title className="d-flex justify-content-center">{portfolioData[3].name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col xl={4} md={6}>
                        <Link to='/single-project'>
                            <Card className='individual-portfolio my-3'>
                                <Card.Img variant="top" src={portfolioData[1].image} className="card-image" />
                                <Card.Body className="card-title">
                                    <Card.Title className="d-flex justify-content-center">{portfolioData[1].name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to='/single-project'>
                            <Card className='individual-portfolio my-3'>
                                <Card.Img variant="top" src={portfolioData[4].image} className="card-image" />
                                <Card.Body className="card-title">
                                    <Card.Title className="d-flex justify-content-center">{portfolioData[4].name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to='/single-project'>
                            <Card className='individual-portfolio my-3'>
                                <Card.Img variant="top" src={portfolioData[6].image} className="card-image" />
                                <Card.Body className="card-title">
                                    <Card.Title className="d-flex justify-content-center">{portfolioData[6].name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col xl={4} md={6}>
                        <Link to='/single-project'>
                            <Card className='individual-portfolio my-3'>
                                <Card.Img variant="top" src={portfolioData[2].image} className="card-image" />
                                <Card.Body className="card-title">
                                    <Card.Title className="d-flex justify-content-center">{portfolioData[2].name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to='/single-project'>
                            <Card className='individual-portfolio my-3'>
                                <Card.Img variant="top" src={portfolioData[5].image} className="card-image" />
                                <Card.Body className="card-title">
                                    <Card.Title className="d-flex justify-content-center">{portfolioData[5].name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Portfolio;