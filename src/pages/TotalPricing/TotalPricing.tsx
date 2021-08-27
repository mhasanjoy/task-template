import Pricing from 'components/aboutUs/Pricing/Pricing';
import CommonHeader from 'components/common/CommonHeader';
import CommonNewsletter from 'components/common/CommonNewsletter';
import ServiceGroups from 'components/home/ServiceGroups/ServiceGroups';
import { Container } from 'react-bootstrap';

const TotalPricing = () => {
    return (
        <>
            <CommonHeader name='Pricing' />
            <Container>
                <Pricing />
            </Container>
            <CommonNewsletter />
            <Container>
                <ServiceGroups />
            </Container>
        </>
    );
};

export default TotalPricing;