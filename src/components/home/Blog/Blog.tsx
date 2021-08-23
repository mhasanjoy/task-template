import { Row } from 'react-bootstrap';
import pic39 from 'assets/images/pic39.png';
import pic40 from 'assets/images/pic40.png';
import pic41 from 'assets/images/pic41.png';
import BlogCard from './BlogCard';

const blogData = [
    {
        id: 1,
        image: pic39,
        name: 'Startup Marketing Solution for Business Owner',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti'
    },
    {
        id: 2,
        image: pic40,
        name: 'How To Boost Your Digital Marketing Agency',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti'
    },
    {
        id: 3,
        image: pic41,
        name: 'Creative solutions to improve your business!',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti'
    }
];

const Blog = () => {
    return (
        <div className="my-5 py-5">
            <div className="text-center mb-5 pb-3">
                <p className="title">BLOG</p>
                <h1>Read Our Latest Project</h1>
            </div>
            <Row className="align-items-stretch">
                {
                    blogData.map(data => <BlogCard key={data.id} data={data} />)
                }
            </Row>
        </div>
    );
};

export default Blog;