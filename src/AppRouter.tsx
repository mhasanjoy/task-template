import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Fallback from 'components/common/Fallback';
import Footer from 'components/common/Footer';
import Navigation from 'components/common/Navigation';
import ScrollToTop from 'components/common/ScrollToTop';
const Home = React.lazy(() => import('pages/Home/Home'));
const SingleService = React.lazy(() => import('pages/SingleService/SingleService'));
const TermsConditions = React.lazy(() => import('pages/TermsConditons/TermsConditions'));
const PrivacyPolicy = React.lazy(() => import('pages/PrivacyPolicy/PrivacyPolicy'));
const Contact = React.lazy(() => import('pages/Contact/Contact'));
const WholeTeam = React.lazy(() => import('pages/WholeTeam/WholeTeam'));
const Services = React.lazy(() => import('pages/Services/Services'));
const AllProjects = React.lazy(() => import('pages/AllProjects/AllProjects'));
const AboutUs = React.lazy(() => import('pages/AboutUs/AboutUs'));
const ProjectsTwo = React.lazy(() => import('pages/ProjectsTwo/ProjectsTwo'));
const ProjectDetails = React.lazy(() => import('pages/ProjectDetails/ProjectDetails'));
const NoMatch = React.lazy(() => import('pages/NoMatch/NoMatch'));

const AppRouter = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navigation />
            <Suspense fallback={Fallback}>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/projects" component={AllProjects} />
                    <Route path="/projects-two" component={ProjectsTwo} />
                    <Route path="/single-project" component={ProjectDetails} />
                    <Route path="/services" component={Services} />
                    <Route path="/team" component={WholeTeam} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/single-service" component={SingleService} />
                    <Route path="/terms-conditions" component={TermsConditions} />
                    <Route path="/privacy-policy" component={PrivacyPolicy} />
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </Suspense>
            <Footer />
        </Router>
    );
};

export default AppRouter;