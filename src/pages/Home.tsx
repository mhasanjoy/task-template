import About from "components/home/About/About"
import Features from "components/home/Features/Features"
import Header from "components/home/Header/Header"
import Projects from "components/home/Projects/Projects"
import Specialization from "components/home/Specialization/Specialization"
import Support from "components/home/Support/Support"
import { Container } from "react-bootstrap"

const Home = () => {
    return (
        <Container className="my-5">
            <Header />
            <Specialization />
            <About />
            <Features />
            <Support />
            <Projects />
        </Container>
    );
};

export default Home;