import { Row } from 'react-bootstrap';
import pic17 from 'assets/images/pic17.jpg';
import pic18 from 'assets/images/pic18.jpg';
import pic19 from 'assets/images/pic19.jpg';
import MemberCard from './MemberCard';

const teamData = [
    {
        id: 1,
        image: pic17,
        name: 'Edward Bold',
        position: 'CEO & Founder'
    },
    {
        id: 2,
        image: pic18,
        name: 'Calvin Klein',
        position: 'Marketing Support'
    },
    {
        id: 3,
        image: pic19,
        name: 'Alastair Cook',
        position: 'Underwriter'
    }
];

const Team = () => {
    return (
        <div className="my-5 py-5">
            <div className="text-center mb-5 pb-3">
                <p className="title">TEAM</p>
                <h1>Meet Our Team</h1>
            </div>
            <Row className="align-item-stretch">
                {
                    teamData.map(data => <MemberCard key={data.id} data={data} />)
                }
            </Row>
        </div>
    );
};

export default Team;