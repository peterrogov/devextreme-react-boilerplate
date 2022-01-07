import { Route, Routes } from 'react-router-dom';
import BundleStatsView from './bundle-stats';
import HomeView from './home';
import NotFoundView from './not-found';

function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/bundle-stats/" element={<BundleStatsView />} />
            <Route path="*" element={<NotFoundView />} />
        </Routes>
    );
}

export default MainRouter;
