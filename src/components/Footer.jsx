import { useEffect, useRef } from 'react'

const Footer = ({ startTime, hasWon, timeElapsed, setTimeElapsed }) => {
    const timer = useRef(null)

    useEffect(() => {
        if (hasWon || !startTime) return clearInterval(timer.current)
        timer.current = setInterval(() => {
            const now = new Date()
            const elapsed = Math.floor((now - startTime) / 1000)
            setTimeElapsed(elapsed)
            if (elapsed === 10) {
                // eslint-disable-next-line no-alert
                alert('time is up!')
                clearInterval(timer.current)
            }
        }, 1000)

        return () => {
            return clearInterval(timer.current)
        }
    }, [startTime, hasWon, setTimeElapsed])

    return (
        <footer className="flex-center grey-background">
            <p className="name">Best Score</p>
            <p className="score">{timeElapsed}</p>
        </footer>
    )
}

export default Footer
