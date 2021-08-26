import CommonHeader from 'components/common/CommonHeader';
import CommonNewsletter from 'components/common/CommonNewsletter';
import Features from 'components/home/Features/Features';
import ServiceGroups from 'components/home/ServiceGroups/ServiceGroups';
import Support from 'components/home/Support/Support';
import { Container } from 'react-bootstrap';

const Services = () => {
    return (
        <>
            <CommonHeader name='Services' />
            <Container>
                <Features />
                <Support />
            </Container>
            <CommonNewsletter />
            <Container>
                <ServiceGroups />
            </Container>
        </>
    );
};

export default Services;