import { Spinner } from "react-bootstrap";

const Fallback = () => {
    return (
        <div className="text-center mt-5">
            <Spinner animation="border" variant="danger" className="mt-5" />
        </div>
    );
};

export default Fallback;