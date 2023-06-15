// eslint-disable-next-line import/no-extraneous-dependencies
import Confetti from 'react-confetti'

const MAX_SCORE = 100000

export default function Win({
    setHasWon,
    setPosition,
    timeElapsed,
    setTimeElapsed,
    movesMade,
}) {
    const score = Math.floor(MAX_SCORE / timeElapsed / movesMade.current)

    function restart() {
        setPosition({ row: 0, column: 0 })
        setHasWon(false)
        setTimeElapsed(0)
        movesMade.current = 0
    }

    function saveScore() {
        const bestScore = localStorage.getItem('best_score')
        const isBest = bestScore || bestScore > score
        if (!isBest) localStorage.setItem('best_score', score)
    }

    saveScore()

    return (
        <>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <article className="modal">
                <h2> YoU bEAt mE !</h2>
                <h3 className="shout">SCORE: {score}</h3>
                <button className="restart-btn" onClick={restart}>
                    wont beat me again!
                </button>
            </article>
        </>
    )
}
