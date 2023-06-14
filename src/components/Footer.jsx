import { useEffect, useState } from 'react'

const Footer = ({ startTime }) => {
    const [timeElapsed, setTimeElapsed] = useState(0)

    useEffect(() => {
        let timer = null
        if (startTime) {
            timer = setInterval(() => {
                const now = new Date()
                const elapsed = Math.floor((now - startTime) / 1000)
                setTimeElapsed(elapsed)
                if (elapsed === 10) {
                    alert('time is up!')
                    clearInterval(timer)
                }
            }, 1000)
        }

        return () => {
            if (timer) clearInterval(timer)
        }
    }, [startTime])

    return (
        <footer className="flex-center grey-background">
            <p className="name">Best Score</p>
            <p className="score">{timeElapsed}</p>
        </footer>
    )
}

export default Footer
