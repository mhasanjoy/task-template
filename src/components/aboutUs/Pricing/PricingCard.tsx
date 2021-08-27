import { Card, Col } from 'react-bootstrap';
import { TiTick } from 'react-icons/ti';
import { Link } from 'react-router-dom';

interface IProps {
    data: {
        id: number;
        name: string;
        price: string;
    }
}

const PricingCard = (props: IProps) => {
    const { name, price } = props.data;

    return (
        <Col md={4}>
            <Card className="pt-5 pricing-card">
                <h3 className="text-primary">{name}</h3>
                <h1>{price}</h1>
                <p className="text-secondary mt-4"><TiTick className="tick-mark" />SEO Audits</p>
                <p className="text-secondary"><TiTick className="tick-mark" />SEO Management</p>
                <p className="text-secondary"><TiTick className="tick-mark" />SEO Copywriting</p>
                <p className="text-secondary"><TiTick className="tick-mark" />Link Building</p>
                <p className="text-secondary"><TiTick className="tick-mark" />Site Migration</p>
                <div className="m-4 justify-content-center">
                    <Link to='/pricing'><button className="pink-btn">Get Started</button></Link>
                </div>
            </Card>
        </Col>
    );
};

export default PricingCard;