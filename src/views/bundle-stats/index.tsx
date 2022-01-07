import './styles.scss';

function BundleStatsView() {
    return (
        <div data-view="bundle-stats">
            <div className="container">
                <div className="card">
                    <h1>Bundle stats</h1>
                    <div className="dx-card card">
                        <iframe src="//devextreme-react-boilerplate.herokuapp.com/bundle-stats.html"></iframe>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BundleStatsView;
