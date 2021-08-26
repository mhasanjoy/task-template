import { useState } from 'react';
import { Row } from 'react-bootstrap';
import PricingCard from './PricingCard';

const monthlyPlan = [
    {
        id: 1,
        name: 'Basic Plan',
        price: '$24'
    },
    {
        id: 2,
        name: 'Standard Plan',
        price: '$59'
    },
    {
        id: 3,
        name: 'Premium Plan',
        price: '$89'
    }
];

const yearlyPlan = [
    {
        id: 4,
        name: 'Basic Plan',
        price: '$199'
    },
    {
        id: 5,
        name: 'Standard Plan',
        price: '$299'
    },
    {
        id: 6,
        name: 'Premium Plan',
        price: '$399'
    }
];

const Pricing = () => {
    const [monthly, setMonthly] = useState<boolean>(true);
    const [yearly, setYearly] = useState<boolean>(false);
    
    const handleMonthlyClick = () => {
        setMonthly(true);
        setYearly(false);
    };

    const handleYearlyClick = () => {
        setYearly(true);
        setMonthly(false);
    };

    let monthlyBtn = {};
    if(!monthly){
        monthlyBtn = {
            color: 'rgb(128, 128, 128)',
            backgroundColor: 'white'
        };
    }
    let yearlyBtn = {};
    if(!yearly){
        yearlyBtn = {
            color: 'rgb(128, 128, 128)',
            backgroundColor: 'white'
        };
    }

    return (
        <div className="my-5 pt-5 pb-2 pricing-component">
            <div className="text-center mb-5 pb-3">
                <p className="title">PRICING PLANS</p>
                <h1>The Best Solutions for Our Clients</h1>
                <div className="my-5 py-3">
                    <button style={monthlyBtn} className="pricing-btn" onClick={handleMonthlyClick}>Monthly</button>
                    <button style={yearlyBtn} className="pricing-btn" onClick={handleYearlyClick}>Yearly</button>
                </div>
                <Row className="mt-5 align-items-stretch">
                    {
                        monthly && monthlyPlan.map(data => <PricingCard key={data.id} data={data} />)
                    }
                    {
                        yearly && yearlyPlan.map(data => <PricingCard key={data.id} data={data} />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Pricing;