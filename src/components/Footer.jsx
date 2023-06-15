const Footer = ({ timeElapsed }) => {
    function getBestScore() {
        return localStorage.getItem('best_score') || ''
    }

    return (
        <footer className="flex-center grey-background">
            <p className="name">Best Score: {getBestScore()}</p>
            <p className="score">{timeElapsed}</p>
        </footer>
    )
}

export default Footer
