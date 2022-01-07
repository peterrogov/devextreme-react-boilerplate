import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'devextreme-react/button';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import GithubStarButon from '../../components/github-star-button';
import './styles.scss';

export interface AppNavBarProps {
    onDrawerButtonClick?: () => void;
}

function AppNavBar(props: AppNavBarProps) {
    const { onDrawerButtonClick } = props;
    return (
        <Toolbar className="navbar">
            <Item location="before" cssClass="drawer-toggle">
                <Button stylingMode="text" onClick={onDrawerButtonClick}>
                    <FontAwesomeIcon icon="bars" />
                </Button>
            </Item>
            <Item
                location="before"
                text="DevExtreme Boilerplate"
                cssClass="logo"
            />
            <Item location="after">
                <GithubStarButon />
            </Item>
        </Toolbar>
    );
}

export default AppNavBar;
