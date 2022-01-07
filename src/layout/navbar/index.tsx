import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'devextreme-react/button';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import './styles.scss';

export interface AppNavBarProps {
    onDrawerButtonClick?: () => void;
}

export const AppNavBar = (props: AppNavBarProps) => {
    return (
        <Toolbar className='navbar'>
            <Item location={'before'} cssClass="drawer-toggle">
                <Button stylingMode="text" onClick={props.onDrawerButtonClick}>
                    <FontAwesomeIcon icon="bars" />
                </Button>
            </Item>
            <Item
                location={'before'}
                text="DevExtreme Boilerplate"
                cssClass={'logo'}
            />
        </Toolbar>
    )
}