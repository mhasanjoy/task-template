import CommonHeader from 'components/common/CommonHeader';
import CommonNewsletter from 'components/common/CommonNewsletter';
import MemberCard from 'components/home/Team/MemberCard';
import Team from 'components/home/Team/Team';
import { Container, Row } from 'react-bootstrap';
import pic45 from 'assets/images/pic45.jpg';
import pic46 from 'assets/images/pic46.jpg';
import pic47 from 'assets/images/pic47.jpg';
import ServiceGroups from 'components/home/ServiceGroups/ServiceGroups';

const newTeamData = [
    {
        id: 4,
        image: pic45,
        name: 'Jhon Ramos',
        position: 'Marketing Manager'
    },
    {
        id: 5,
        image: pic46,
        name: 'Jis Sergio',
        position: 'Supervisor'
    },
    {
        id: 6,
        image: pic47,
        name: 'SA Isco',
        position: 'Office Manager'
    }
];

const WholeTeam = () => {
    return (
        <>
            <CommonHeader name='Our Team Members' />
            <Container className="mb-5 pb-5">
                <Team />
                <Row className="align-item-stretch">
                    {
                        newTeamData.map(data => <MemberCard key={data.id} data={data} />)
                    }
                </Row>
                <ServiceGroups />
            </Container>
            <CommonNewsletter />
        </>
    );
};

export default WholeTeam;