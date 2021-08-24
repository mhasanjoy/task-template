import { Carousel, Col, Row } from 'react-bootstrap';
import pic20 from 'assets/images/pic20.jpg';
import pic21 from 'assets/images/pic21.jpg';
import {AiOutlineMinus} from 'react-icons/ai'; 

const testimonialData = [
    {
        id: 1,
        image: pic20,
        name: 'Cak Dikin',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.Lorem is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 2,
        image: pic21,
        name: 'Lee Munroe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.Lorem is simply dummy text of the printing and typesetting industry.'
    }
];

const Testimonial = () => {
    return (
        <div className="my-5 py-5 testimonial-component">
            <h1>What Our Clients Say</h1>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Carousel className="carousel">
                        <Carousel.Item>
                            <div className="d-flex gap-5 align-items-center">
                                <img
                                    src={testimonialData[0].image}
                                    alt="First slide"
                                />
                                <div>
                                    <p className="text-secondary">{testimonialData[0].description}</p>
                                    <h5 className="text-primary"><AiOutlineMinus className="me-2" />{testimonialData[0].name}</h5>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex gap-5 align-items-center">
                                <img
                                    src={testimonialData[1].image}
                                    alt="Second slide"
                                />
                                <div>
                                    <p className="text-secondary">{testimonialData[1].description}</p>
                                    <h5 className="text-primary"><AiOutlineMinus className="me-2" />{testimonialData[1].name}</h5>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
};

export default Testimonial;