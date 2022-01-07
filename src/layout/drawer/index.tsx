import Drawer from "devextreme-react/drawer"
import { MainRouter } from "../../views/router";
import NavigationList from "./drawerContents";
import './styles.scss';

export interface AppNavDrawerProps {
    open?: boolean;
}

export const AppNavDrawer = (props: AppNavDrawerProps) => {
    return (
        <Drawer
            opened={props.open}
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
    )
}