import About from "components/home/About/About"
import Header from "components/home/Header/Header"
import Specialization from "components/home/Specialization/Specialization"
import { Container } from "react-bootstrap"

const Home = () => {
    return (
        <Container className="my-5">
            <Header />
            <Specialization />
            <About />
        </Container>
    );
};

export default Home;