import './nomatch.styles.css';
const NoMatch = () => {

    return (
        <div className="no-match-page">
            <div className="no-match-container">
                <h1>Lost your Way?</h1>
                <p>Sorry, we can't find the page. You'll find lots to explore on the home page.</p>
                <a href="/">
                    <button className='Netflix-home-btn'>Netflix Home</button>
                </a>

                <h3>Error Code NSES-404</h3>
            </div>
        </div>
    )
}

export default NoMatch;