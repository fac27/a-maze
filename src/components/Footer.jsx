import { useEffect, useState } from 'react'

const Footer = ({ startTime, hasWon }) => {
    const [timeElapsed, setTimeElapsed] = useState(0)

    useEffect(() => {
        let timer = null
        if (!startTime) return
        // eslint-disable-next-line consistent-return
        if (hasWon) {
            // eslint-disable-next-line no-alert
            alert(timeElapsed)
            // eslint-disable-next-line consistent-return
            return clearInterval(timer)
        }
        timer = setInterval(() => {
            const now = new Date()
            setTimeElapsed(Math.floor((now - startTime) / 1000))
        }, 1000)

        // eslint-disable-next-line consistent-return
        return () => {
            clearInterval(timer)
        }
    }, [startTime, hasWon, timeElapsed])

    return (
        <footer className="flex-center grey-background">
            <p className="name">Best Score</p>
            <p className="score">{timeElapsed}</p>
        </footer>
    )
}

export default Footer
