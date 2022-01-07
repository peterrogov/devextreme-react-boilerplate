import './styles.scss';

function BundleStatsView() {
    return (
        <div data-view="bundle-stats">
            <div className="container">
                <div className="card">
                    <h1>Bundle stats</h1>
                    <div className="dx-card card">
                        <iframe title="Bundle stats" src="//devextreme-react-boilerplate.herokuapp.com/bundle-stats.html" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BundleStatsView;
