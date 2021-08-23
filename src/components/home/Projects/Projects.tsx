import pic11 from 'assets/images/pic11.jpg';
import pic12 from 'assets/images/pic12.jpg';
import pic13 from 'assets/images/pic13.jpg';
import pic14 from 'assets/images/pic14.jpg';
import pic15 from 'assets/images/pic15.jpg';
import pic16 from 'assets/images/pic16.jpg';
import { Row } from 'react-bootstrap';
import IndividualProject from './IndividualProject';

const projectData = [
    {
        id: 1,
        image: pic11,
        name: 'Branding'
    },
    {
        id: 2,
        image: pic12,
        name: 'Marketing'
    },
    {
        id: 3,
        image: pic13,
        name: 'SEO'
    },
    {
        id: 4,
        image: pic14,
        name: 'Web Design'
    },
    {
        id: 5,
        image: pic15,
        name: 'Web Development'
    },
    {
        id: 6,
        image: pic16,
        name: 'Digital Marketing'
    }
];

const Projects = () => {
    return (
        <div className="projects-container my-5 py-5">
            <div className="text-center mb-5 pb-3">
                <p className="title">PROJECTS</p>
                <h1>Our Projects For Client</h1>
            </div>
            <Row className='align-items-stretch'>
                {
                    projectData.map(data => <IndividualProject key={data.id} data={data} />)
                }
            </Row>
        </div>
    );
};

export default Projects;