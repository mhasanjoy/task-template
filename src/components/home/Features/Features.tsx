import { Col, Row } from 'react-bootstrap';
import pic6 from 'assets/images/pic6.png';
import pic7 from 'assets/images/pic7.png';
import pic3 from 'assets/images/pic3.png';
import pic9 from 'assets/images/pic9.png';
import pic8 from 'assets/images/pic8.png';
import FeatureCard from './FeatureCard';

const featureData1 = [
    {
        id: 1,
        image: pic6,
        name: 'Ideas & Analysis',
        description: 'Planning Bureau to present developers. Nutrition and the United States is very tight blockage.'
    },
    {
        id: 2,
        image: pic7,
        name: 'Designing',
        description: 'Planning Bureau to present developers. Nutrition and the United States is very tight blockage.'
    }
];
const featureData2 = [
    {
        id: 3,
        image: pic3,
        name: 'Development',
        description: 'Planning Bureau to present developers. Nutrition and the United States is very tight blockage.'
    },
    {
        id: 4,
        image: pic9,
        name: 'Testing & Launching',
        description: 'Planning Bureau to present developers. Nutrition and the United States is very tight blockage.'
    }
];

const Features = () => {
    return (
        <div className="my-5 py-5 feature-component align-items-stretch">
            <h1 className="mb-5 pb-3">Our Features</h1>
            <Row className="align-items-center h-100">
                <Col md={4}>
                    {
                        featureData1.map(data => <FeatureCard key={data.id} data={data} />)
                    }
                </Col>
                <Col md={4}>
                    <img src={pic8} alt="Feature Image" className="feature-image" />
                </Col>
                <Col md={4}>
                    {
                        featureData2.map(data => <FeatureCard key={data.id} data={data} />)
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Features;