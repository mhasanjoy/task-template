import CommonHeader from 'components/common/CommonHeader';
import CommonNewsletter from 'components/common/CommonNewsletter';
import Blog from 'components/home/Blog/Blog';
import ServiceGroups from 'components/home/ServiceGroups/ServiceGroups';
import { Container } from 'react-bootstrap';

const AllBlogs = () => {
    return (
        <>
            <CommonHeader name='Blog' />
            <Container>
                <Blog />
                <ServiceGroups />
            </Container>
            <CommonNewsletter />
        </>
    );
};

export default AllBlogs;