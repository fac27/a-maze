import { useEffect, useState } from 'react'

const MAX_SCORE = 100000

const Header = ({ user, timeElapsed, movesMade }) => {
    const [score, setScore] = useState()

    useEffect(() => {
        const currentScore = Math.floor(
            MAX_SCORE / timeElapsed / movesMade.current
        )
        if (isFinite(currentScore)) setScore(currentScore)
    }, [timeElapsed, movesMade])

    return (
        <header className="flex-center grey-background">
            <p className="name">{user.name}</p>
            <h1>A-MAZE</h1>
            <p className="score">score: {score}</p>
        </header>
    )
}

export default Header
