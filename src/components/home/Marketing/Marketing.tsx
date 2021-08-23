import { useState } from 'react';
import { Row } from 'react-bootstrap';
import pic27 from 'assets/images/pic27.png';
import pic28 from 'assets/images/pic28.png';
import pic29 from 'assets/images/pic29.png';
import pic30 from 'assets/images/pic30.png';
import pic31 from 'assets/images/pic31.png';
import pic32 from 'assets/images/pic32.png';
import MarketingCard from './MarketingCard';
import pic33 from 'assets/images/pic33.jpg';
import pic34 from 'assets/images/pic34.jpg';
import pic35 from 'assets/images/pic35.jpg';
import pic36 from 'assets/images/pic36.jpg';
import pic37 from 'assets/images/pic37.jpg';
import pic38 from 'assets/images/pic38.jpg';
import MarketingDetails from './MarketingDetails';

const marketingData1 = [
    {
        id: 1,
        image: pic27,
        name: 'Real-Time-Analytics'
    },
    {
        id: 2,
        image: pic28,
        name: 'Pay-Per-Click'
    },
    {
        id: 3,
        image: pic29,
        name: 'Online Marketing'
    },
    {
        id: 4,
        image: pic30,
        name: 'Email Marketing'
    },
    {
        id: 5,
        image: pic31,
        name: 'Social Marketing'
    },
    {
        id: 6,
        image: pic32,
        name: 'Digital Marketing'
    }
];

const marketingData2 = [
    {
        id: 1,
        image: pic33,
        name: 'Real-Time-Analytics',
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`
    },
    {
        id: 2,
        image: pic34,
        name: 'Pay-Per-Click',
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`
    },
    {
        id: 3,
        image: pic35,
        name: 'Online Marketing',
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`
    },
    {
        id: 4,
        image: pic36,
        name: 'Email Marketing',
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`
    },
    {
        id: 5,
        image: pic37,
        name: 'Social Marketing',
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`
    },
    {
        id: 6,
        image: pic38,
        name: 'Digital Marketing',
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`
    }
];

interface IDetail {
    id: number;
    image: string;
    name: string;
    description: string;
}

const Marketing = () => {
    const [marketing, setMarketing] = useState<string>('Real-Time-Analytics');
    const [detail, setDetail] = useState<IDetail>(marketingData2[0]);
    const [render, setRender] = useState<boolean>(true);

    const marketingDetail = (name: string) => {
        const detailInfo = (marketingData2.find(data => data.name === name) || {} ) as IDetail;
        setDetail(detailInfo);
        setRender(false);
    }

    const handleClick = (type: string) => {
        setMarketing(type);
        setRender(true);
    }

    if(render){
        marketingDetail(marketing);
    }

    return (
        <div className="my-5 py-5">
            <div className="text-center mb-5 pb-3">
                <p className="title">BOOSTING</p>
                <h1>Outstanding Digital Experience</h1>
            </div>
            <Row>
                {
                    marketingData1.map(data => <MarketingCard key={data.id} handleClick={handleClick} data={data} />)
                }
            </Row>
            <MarketingDetails data={detail} />
        </div>
    );
};

export default Marketing;