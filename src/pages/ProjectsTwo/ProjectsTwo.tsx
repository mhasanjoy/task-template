import Portfolio from 'components/aboutUs/Portfolio/Portfolio';
import CommonHeader from 'components/common/CommonHeader';
import CommonNewsletter from 'components/common/CommonNewsletter';
import ServiceGroups from 'components/home/ServiceGroups/ServiceGroups';
import { Container } from 'react-bootstrap';

const ProjectsTwo = () => {
    return (
        <>
            <CommonHeader name='Projects Two' />
            <Container>
                <Portfolio />
            </Container>
            <CommonNewsletter />
            <Container>
                <ServiceGroups />
            </Container>
        </>
    );
};

export default ProjectsTwo;