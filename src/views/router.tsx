import { Route, Routes } from 'react-router-dom';
import HomeView from './home';
import NotFoundView from './not-found';

function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="*" element={<NotFoundView />} />
        </Routes>
    );
}

export default MainRouter;
