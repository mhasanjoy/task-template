import CommonHeader from 'components/common/CommonHeader';
import CommonNewsletter from 'components/common/CommonNewsletter';
import Marketing from 'components/home/Marketing/Marketing';
import ServiceGroups from 'components/home/ServiceGroups/ServiceGroups';
import Specialization from 'components/home/Specialization/Specialization';
import { Container } from 'react-bootstrap';

const AllFeatures = () => {
    return (
        <>
            <CommonHeader name='Features' />
            <Container>
                <Specialization />
                <Marketing />
            </Container>
            <CommonNewsletter />
            <Container>
                <ServiceGroups />
            </Container>
        </>
    );
};

export default AllFeatures;