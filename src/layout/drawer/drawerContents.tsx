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
    data: ListItemData;
}

function ListItem(props: ListItemProps) {
    const location = useLocation();
    const { data } = props;
    return (
        <div className={classNames('item', (data.url && matchPath(data.url, location.pathname)) && 'item-active')}>
            {data.icon && (
                <FontAwesomeIcon className="icon" size="1x" color={data.iconColor} icon={data.icon} />
            )}
            <span className="text">{data.text}</span>
        </div>
    );
}

const ListItems: ListItemData[] = [
    {
        text: 'Home',
        icon: 'home',
        url: '/',
    },
    {
        text: 'Bundle stats',
        icon: 'chart-pie',
        url: '/bundle-stats/',
    },
    {
        text: '404 Not Found',
        icon: 'bomb',
        url: '/this-page-does-not-exist',
    },
];

function NavigationList() {
    const navigate = useNavigate();
    const onItemClick = (url?: string) => {
        if (url) {
            navigate(url);
        }
    };

    return (
        <nav className="drawer-content">
            <List
                className="panel-list"
                onItemClick={(e) => onItemClick(e.itemData?.url)}
                itemComponent={ListItem}
                dataSource={ListItems}
                hoverStateEnabled
                activeStateEnabled
                focusStateEnabled={false}
            />

        </nav>
    );
}

export default NavigationList;
