import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Fallback from 'components/common/Fallback';
import Footer from 'components/common/Footer';
import Navigation from 'components/common/Navigation';
const Home = React.lazy(() => import('pages/Home/Home'));
const NoMatch = React.lazy(() => import('pages/NoMatch/NoMatch'));

const AppRouter = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Suspense fallback={Fallback}>
                    <Route path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={NoMatch} />
                </Suspense>
            </Switch>
            <Footer />
        </Router>
    );
};

export default AppRouter;