const Footer = ({ timeElapsed }) => {
    return (
        <footer className="flex-center grey-background">
            <p className="name">Best Score</p>
            <p className="score">{timeElapsed}</p>
        </footer>
    )
}

export default Footer
