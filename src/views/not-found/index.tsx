import './styles.scss';

function NotFoundView() {
    return (
        <div data-view="not-found">
            <div className="container">
                <div className="dx-card card">
                    <h3>Not found</h3>
                    <p>The page you are looking for is not found</p>
                </div>
            </div>
        </div>

    );
}

export default NotFoundView;
