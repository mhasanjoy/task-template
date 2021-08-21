import Fallback from 'components/common/Fallback';
import Navigation from 'components/common/Navigation';
import React, { Suspense } from 'react';
const Home = React.lazy(() => import('pages/Home'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Fallback />}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
