import Accordion, { Item } from 'devextreme-react/accordion';
import ReactMarkdown from 'react-markdown';
import dxLogo from '../../themes/light/images/dxLogo.svg';
import reactLogo from '../../themes/light/images/reactLogo.svg';
import webpackLogo from '../../themes/light/images/webpackLogo.svg';
import introText from './intro.md';
import licenseText from './license.md';
import overviewText from './overview.md';
import './styles.scss';

interface ItemTitleProps {
    title: string;
}

function ItemTitle({ title }: ItemTitleProps) {
    return (
        <h3>{title}</h3>
    );
}

function HomeView() {
    return (
        <div data-view="home" className="view-container-regular">
            <h1>DevExtreme + React boilerplate</h1>
            <div className="dx-card content">
                <div className="logos">
                    <img alt="devextreme logo" className="logo-dx" src={dxLogo} />
                    <img alt="react logo" className="logo-react" src={reactLogo} />
                    <img alt="webpack logo" className="logo-webpack" src={webpackLogo} />
                </div>
                <ReactMarkdown>{introText}</ReactMarkdown>
                <Accordion className="accordion" itemTitleRender={ItemTitle}>
                    <Item title="Overview">
                        <ReactMarkdown>{overviewText}</ReactMarkdown>
                    </Item>
                    <Item title="License">
                        <ReactMarkdown>{licenseText}</ReactMarkdown>
                    </Item>
                </Accordion>
            </div>
        </div>
    );
}

export default HomeView;
