// eslint-disable-next-line import/no-extraneous-dependencies
import Confetti from 'react-confetti'

export default function Win({
    setHasWon,
    setPosition,
    timeElapsed,
    setTimeElapsed,
    movesMade,
}) {
    function restart() {
        setPosition({ row: 0, column: 0 })
        setHasWon(false)
        setTimeElapsed(0)
    }

    // console.log(movesMade.current, timeElapsed)
    return (
        <>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <article className="modal">
                <h2> YoU bEAt mE !</h2>
                <h3 className="shout">
                    SCORE: {Math.floor(movesMade.current / timeElapsed)}
                </h3>
                <button className="restart-btn" onClick={restart}>
                    wont beat me again!
                </button>
            </article>
        </>
    )
}
