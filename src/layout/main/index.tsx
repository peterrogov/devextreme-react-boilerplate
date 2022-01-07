import { useState } from 'react';
import AppNavDrawer from '../drawer';
import AppFooter from '../footer';
import AppNavBar from '../navbar';
import './styles.scss';

function AppRoot() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div className="layout-container">
            <AppNavBar onDrawerButtonClick={() => setDrawerOpen(!drawerOpen)} />
            <AppNavDrawer open={drawerOpen} />
            <AppFooter />
        </div>
    );
}

export default AppRoot;
