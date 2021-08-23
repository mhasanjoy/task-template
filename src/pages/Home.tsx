import About from "components/home/About/About"
import Analysis from "components/home/Analysis/Analysis"
import Blog from "components/home/Blog/Blog"
import Features from "components/home/Features/Features"
import Header from "components/home/Header/Header"
import Marketing from "components/home/Marketing/Marketing"
import Newsletter from "components/home/Newsletter/Newsletter"
import Projects from "components/home/Projects/Projects"
import ServiceGroups from "components/home/ServiceGroups/ServiceGroups"
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
            <Marketing />
            <Projects />
            <Team />
            <Testimonial />
            <Analysis />
            <Blog />
            <ServiceGroups />
            <Newsletter />
        </Container>
    );
};

export default Home;