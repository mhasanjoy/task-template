import About from "components/home/About/About"
import Analysis from "components/home/Analysis/Analysis"
import Features from "components/home/Features/Features"
import Header from "components/home/Header/Header"
import Projects from "components/home/Projects/Projects"
import Specialization from "components/home/Specialization/Specialization"
import Support from "components/home/Support/Support"
import Team from "components/home/Team/Team"
import Testimonial from "components/home/Testimonial/Testimonial"
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
            <Team />
            <Testimonial />
            <Analysis />
        </Container>
    );
};

export default Home;