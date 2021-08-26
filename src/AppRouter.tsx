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
const TermsConditions = React.lazy(() => import('pages/TermsConditons/TermsConditions'));
const PrivacyPolicy = React.lazy(() => import('pages/PrivacyPolicy/PrivacyPolicy'));
// const NoMatch = React.lazy(() => import('pages/NoMatch/NoMatch'));

const AppRouter = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navigation />
            <Switch>
                <Suspense fallback={Fallback}>
                    <Route path="/home" component={Home} />
                    <Route path="/terms-conditions" component={TermsConditions} />
                    <Route path="/privacy-policy" component={PrivacyPolicy} />
                    <Route exact path="/" component={Home} />
                    {/* <Route path="*" component={NoMatch} /> */}
                </Suspense>
            </Switch>
            <Footer />
        </Router>
    );
};

export default AppRouter;