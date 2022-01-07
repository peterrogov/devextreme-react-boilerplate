import Drawer from 'devextreme-react/drawer';
import MainRouter from '../../views/router';
import NavigationList from './drawerContents';
import './styles.scss';

export interface AppNavDrawerProps {
    open?: boolean;
}

function AppNavDrawer(props: AppNavDrawerProps) {
    const { open } = props;
    return (
        <Drawer
            opened={open}
            openedStateMode="shrink"
            position="left"
            revealMode="slide"
            id="drawer-main"
            component={NavigationList}
            closeOnOutsideClick
        >
            <main id="content">
                <MainRouter />
            </main>
        </Drawer>
    );
}

export default AppNavDrawer;