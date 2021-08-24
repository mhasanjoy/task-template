import { Spinner } from "react-bootstrap";

const Fallback = () => {
    return (
        <div className="text-center my-5">
            <Spinner animation="border" variant="danger" className="my-5" />
        </div>
    );
};

export default Fallback;