import CommonHeader from 'components/common/CommonHeader';
import CommonNewsletter from 'components/common/CommonNewsletter';
import Projects from 'components/home/Projects/Projects';
import ServiceGroups from 'components/home/ServiceGroups/ServiceGroups';
import { Container } from 'react-bootstrap';

const AllProjects = () => {
    return (
        <>
            <CommonHeader name='Projects' />
            <Container>
                <Projects />
            </Container>
            <CommonNewsletter />
            <Container>
                <ServiceGroups />
            </Container>
        </>
    );
};

export default AllProjects;