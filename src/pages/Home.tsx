import About from "components/home/About/About"
import Features from "components/home/Features/Features"
import Header from "components/home/Header/Header"
import Specialization from "components/home/Specialization/Specialization"
import { Container } from "react-bootstrap"

const Home = () => {
    return (
        <Container className="my-5">
            <Header />
            <Specialization />
            <About />
            <Features />
        </Container>
    );
};

export default Home;