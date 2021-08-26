import React from 'react';

interface IProps {
    name: string;

}

const CommonHeader = (props: IProps) => {
    return (
        <div className="common-header-component">
            <div className="common-header text-white d-flex align-items-center justify-content-center">
                <div>
                    <h2>{props.name}</h2>
                    <ul className="d-flex justify-content-center">
                        <li>Home</li>
                        <li className="name-list ms-2">{props.name}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CommonHeader;