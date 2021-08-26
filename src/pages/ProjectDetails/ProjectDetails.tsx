import CommonHeader from 'components/common/CommonHeader';
import { Card, Col, Container, Row } from 'react-bootstrap';
import pic43 from 'assets/images/pic43.jpg';
import pic55 from 'assets/images/pic55.jpg';
import { TiTick } from 'react-icons/ti';

const ProjectDetails = () => {
    return (
        <>
            <CommonHeader name="Project Details" />
            <Container className="my-5 py-5">
                <Row>
                    <Col md={6}>
                        <Card>
                            <img src={pic43} alt="" className="w-100" />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <img src={pic55} alt="" className="w-100" />
                        </Card>
                    </Col>
                </Row>
                <div className="mt-5">
                    <h3 className="text-primary">Competitor Analysis</h3>
                    <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="text-secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="mt-4">
                    <h5 className="text-primary"><TiTick style={{ color: '#f00790' }} className="me-2" />Core Development</h5>
                    <p className="text-secondary">No fake products and services. The customer is king, their lives and needs are the inspiration. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.</p>
                </div>
                <div className="mt-4">
                    <h5 className="text-primary"><TiTick style={{ color: '#f00790' }} className="me-2" />Define Your Choices</h5>
                    <p className="text-secondary">No fake products and services. The customer is king, their lives and needs are the inspiration. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <p className="text-secondary">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section.</p>
                </div>
                <Row className="mt-5 align-items-center">
                    <Col md={3}>
                        <h5 className="text-primary">Client</h5>
                        <p className="text-secondary">James Anderson</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="text-primary">Category</h5>
                        <p className="text-secondary">Network, Marketing</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="text-primary">Date</h5>
                        <p className="text-secondary">February 28, 2021</p>
                    </Col>
                    <Col md={3}>
                        <button className="pink-btn">Live Preview</button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProjectDetails;