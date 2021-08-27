import CommonHeader from 'components/common/CommonHeader';
import { Card, Col, Container, Row } from 'react-bootstrap';
import pic56 from 'assets/images/pic56.jpg';
import pic57 from 'assets/images/pic57.jpg';
import pic58 from 'assets/images/pic58.jpg';
import pic59 from 'assets/images/pic59.jpg';
import { BsFillBookmarkFill, BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import pic60 from 'assets/images/pic60.jpg';
import pic61 from 'assets/images/pic61.jpg';
import pic62 from 'assets/images/pic62.jpg';
import pic63 from 'assets/images/pic63.jpg';
import CommentCard from 'components/singleBlog/CommentCard';

const commentData = [
    {
        id: 1,
        image: pic60,
        name: 'John Jones',
        date: 'JANUARY 24, 2020 AT 10:59 AM',
        comment: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: 2,
        image: pic61,
        name: 'Steven Smith',
        date: 'JANUARY 24, 2020 AT 10:59 AM',
        comment: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: 3,
        image: pic62,
        name: 'James Anderson',
        date: 'JANUARY 24, 2020 AT 10:59 AM',
        comment: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: 4,
        image: pic63,
        name: 'Sarah Taylor',
        date: 'JANUARY 24, 2020 AT 10:59 AM',
        comment: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
];

const SingleBlog = () => {
    return (
        <>
            <CommonHeader name='Blog Details' />
            <Container className="my-5 py-5 single-blog-component">
                <Row>
                    <Col md={8}>
                        <img src={pic56} alt="" className="w-100" />
                        <p className="text-primary mt-3"><strong>Posted On:</strong> January 02, 2021  -  <strong>Posted By:</strong> <span className="text-highlight">John Anderson</span></p>
                        <h3 className="text-primary">Why Business Absolutely Needs a Virtual Office</h3>
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                        <p className="text-secondary">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <h4 className="text-primary fst-italic py-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h4>
                        <p className="text-secondary">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                        <Row>
                            <Col md={4} className="py-3">
                                <Card>
                                    <img src={pic57} alt="" className="w-100" />
                                </Card>
                            </Col>
                            <Col md={4} className="py-3">
                                <Card>
                                    <img src={pic58} alt="" className="w-100" />
                                </Card>
                            </Col>
                            <Col md={4} className="py-3">
                                <Card>
                                    <img src={pic59} alt="" className="w-100" />
                                </Card>
                            </Col>
                        </Row>
                        <p className="text-secondary">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
                        <div className="d-flex justify-content-between align-items-center my-3">
                            <p><BsFillBookmarkFill /><span className="text-highlight ms-2">Fashion</span>, <span className="text-highlight">Games</span>, <span className="text-highlight">Travel</span></p>
                            <div>
                                <span className="text-primary me-2">Share: </span>
                                <button className="social-icon"><FaLinkedinIn /></button>
                                <button className="social-icon"><FaFacebookF /></button>
                                <button className="social-icon"><AiOutlineTwitter /></button>
                                <button className="social-icon"><FaInstagram /></button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-5">
                            <p><strong className="text-primary text-highlight"><BsArrowLeft className="me-2" />Previous Post</strong></p>
                            <p><strong className="text-primary text-highlight">Next Post<BsArrowRight className="ms-2" /></strong></p>
                        </div>
                        <h3 className="text-primary ps-4 mb-4">4 Comments:</h3>
                        {
                            commentData.map(data => <CommentCard key={data.id} data={data} />)
                        }
                        <h3 className="text-primary mt-5">Leave a Reply</h3>
                        <p className="text-secondary">Your email address will not be published.Required fields are marked*</p>
                        <label htmlFor="comment"><strong className="text-primary">Comment</strong></label>
                        <textarea name="comment" cols={30} rows={5} className="form-control my-2"></textarea>
                        <label htmlFor="name"><strong className="text-primary">Name <span className="pink-text">*</span></strong></label>
                        <input type="text" name='name' className="form-control my-2 py-2" required />
                        <label htmlFor="email"><strong className="text-primary">Email <span className="pink-text">*</span></strong></label>
                        <input type="email" name='email' className="form-control my-2 py-2" required />
                        <label htmlFor="website"><strong className="text-primary">Website</strong></label>
                        <input type="text" name='website' className="form-control my-2 py-2" />
                        <div className="mt-5 d-flex align-items-center">
                            <input type="checkbox" />
                            <p className="text-secondary mt-3 ms-2">Save my name, email, and website in this browser for the next time I comment.</p>
                        </div>
                        <button className="pink-btn my-3">POST A COMMENT</button>
                    </Col>
                    <Col md={4}>
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SingleBlog;