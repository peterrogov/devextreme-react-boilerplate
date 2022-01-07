import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import List from 'devextreme-react/list.js';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import './styles.scss';

export interface ListItemData {
    text: string;
    icon?: IconProp;
    iconColor?: string;
    url: string;
}

interface ListItemProps {
    index: number;
    data: ListItemData;
}

const ListItem = (props: ListItemProps) => {
    const location = useLocation();
    return (
        <div className={classNames('item', (props.data.url && matchPath(props.data.url, location.pathname)) && 'item-active')}>
            {props.data.icon && (
                <FontAwesomeIcon className='icon' size='1x' color={props.data.iconColor} icon={props.data.icon} />
            )}
            <span className='text'>{props.data.text}</span>
        </div>
    )
}

const ListItems: ListItemData[] = [
    {
        text: "Home",
        icon: "home",
        url: "/"
    },
    {
        text: "404 Not Found",
        icon: "bomb",
        url: "/this-page-does-not-exist"
    }
];

const NavigationList = () => {
    const navigate = useNavigate();
    return (
        <nav className="drawer-content">
            <List
                className="panel-list"
                onItemClick={(e) => { e.itemData?.url && navigate(e.itemData.url) }}
                itemComponent={ListItem}
                dataSource={ListItems}
                hoverStateEnabled={true}
                activeStateEnabled={true}
                focusStateEnabled={false}
            />

        </nav>
    );
}

export default NavigationList;