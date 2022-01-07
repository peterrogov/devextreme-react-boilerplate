import dxLogo from '../../themes/light/images/dxLogo.svg';
import reactLogo from '../../themes/light/images/reactLogo.svg';
import webpackLogo from '../../themes/light/images/webpackLogo.svg';
import ReactMarkdown from 'react-markdown';
import './styles.scss';
import readmeText from './readme.md';


export const HomeView = () => {
    return (
        <div data-view="home" className="view-container-regular">
            <h1>DevExtreme + React boilerplate</h1>
            <div className="dx-card content">
                <div className='logos'>
                    <img className='logo-dx' src={dxLogo} />
                    <img className='logo-react' src={reactLogo} />
                    <img className='logo-webpack' src={webpackLogo} />
                </div>
                <ReactMarkdown>{readmeText}</ReactMarkdown>
            </div>
        </div>
    )
}