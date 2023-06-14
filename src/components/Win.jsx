// eslint-disable-next-line import/no-extraneous-dependencies
import Confetti from 'react-confetti'

export default function Win({ setHasWon, setPosition }) {
    function restart() {
        setPosition({ row: 0, column: 0 })
        setHasWon(false)
    }

    return (
        <>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <article className="modal">
                <h2 className="shout"> YoU bEAt mE !</h2>
                <button className="restart-btn" onClick={restart}>
                    wont beat me again!
                </button>
            </article>
        </>
    )
}
