import { Row } from 'react-bootstrap';
import pic2 from 'assets/images/pic2.png';
import pic3 from 'assets/images/pic3.png';
import pic4 from 'assets/images/pic4.png';
import SpecializationCard from './SpecializationCard';

const specializationData = [
    {
        id: 1,
        image: pic2,
        name: 'Strategy & Research',
        description: `Eros as football's largest casino at the clinical sad. Nulla vulputate dolor sit amet rhoncus suscipit, as are of the consequat ipsum, et porttitor.`
    },
    {
        id: 2,
        image: pic3,
        name: 'Development',
        description: `Eros as football's largest casino at the clinical sad. Nulla vulputate dolor sit amet rhoncus suscipit, as are of the consequat ipsum, et porttitor.`
    },
    {
        id: 3,
        image: pic4,
        name: 'Web Solution',
        description: `Eros as football's largest casino at the clinical sad. Nulla vulputate dolor sit amet rhoncus suscipit, as are of the consequat ipsum, et porttitor.`
    }
];

const Specialization = () => {
    return (
        <div className="my-5 py-5">
            <h1 className="text-center mb-5 pb-5">Our Specialization</h1>
            <Row className="align-items-stretch">
                {
                    specializationData.map(data => <SpecializationCard key={data.id} data={data} />)
                }
            </Row>
        </div>
    );
};

export default Specialization;