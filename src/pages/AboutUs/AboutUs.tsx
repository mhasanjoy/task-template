import Portfolio from 'components/aboutUs/Portfolio/Portfolio';
import Pricing from 'components/aboutUs/Pricing/Pricing';
import CommonHeader from 'components/common/CommonHeader';
import CommonNewsletter from 'components/common/CommonNewsletter';
import About from 'components/home/About/About';
import Features from 'components/home/Features/Features';
import ServiceGroups from 'components/home/ServiceGroups/ServiceGroups';
import Specialization from 'components/home/Specialization/Specialization';
import Team from 'components/home/Team/Team';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <>
            <CommonHeader name='About Us' />
            <Container>
                <About />
                <Specialization />
                <Features />
                <Pricing />
                <Portfolio />
                <Team />
            </Container>
            <CommonNewsletter />
            <Container>
                <ServiceGroups />
            </Container>
        </>
    );
};

export default AboutUs;