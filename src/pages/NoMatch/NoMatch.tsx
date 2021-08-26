import pic404 from 'assets/images/404.png';

const NoMatch = () => {
    return (
        <div className="no-match-component d-flex align-items-center justify-content-center">
            <div>
                <img src={pic404} alt="" className="error-image" />
                <h1 className="my-4"><strong>Page Not Found</strong></h1>
                <p className="text-secondary">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            </div>
        </div>
    );
};

export default NoMatch;