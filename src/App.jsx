import { useEffect, useState, useRef } from 'react'
import Maze from './components/Maze.jsx'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { UserContext } from './Context.js'
import { level1 } from './components/mazes.js'
import Win from './components/Win.jsx'

function App() {
    const [user, setUser] = useState({
        name: 'tom',
        emoji: `👿`,
    })
    const [position, setPosition] = useState({ row: 0, column: 0 })
    const [timeElapsed, setTimeElapsed] = useState(0)
    const movesMade = useRef(0)
    const [hasWon, setHasWon] = useState(false)

    const keyMap = {
        ArrowUp: { row: position.row - 1, column: position.column },
        ArrowDown: { row: position.row + 1, column: position.column },
        ArrowLeft: { row: position.row, column: position.column - 1 },
        ArrowRight: { row: position.row, column: position.column + 1 },
    }

    function movePlayer() {
        const handleKeyUp = (e) => {
            if (hasWon) return
            // Check if the pressed key is in the keyMap
            if (keyMap.hasOwnProperty(e.key)) {
                const newPos = keyMap[e.key]
                if (
                    level1[newPos.row] === undefined ||
                    level1[newPos.row][newPos.column] === undefined
                ) {
                    // Verify the new position is within the boundaries
                    const wrapper =
                        document.getElementsByClassName('maze-wrapper')[0]
                    wrapper.style.setProperty('outline', '2px solid red')
                    setTimeout(() => {
                        wrapper.style.removeProperty('outline')
                    }, 500)
                } else if (level1[newPos.row][newPos.column] === 1) {
                    // verify new pos is not a  wall
                    const cell = document.getElementById(
                        `${newPos.row}-${newPos.column}`
                    )
                    cell.style.backgroundColor = '#880808'
                    setTimeout(() => {
                        cell.style.backgroundColor = '#5d1d1d'
                    }, 500)
                } else if (level1[newPos.row][newPos.column] === '🏁') {
                    // WIN
                    setPosition(newPos)
                    // hasStarted.current = false
                    setHasWon(true)
                } else {
                    // valid move
                    movesMade.current++
                    setPosition(newPos)
                }
            }
        }
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keyup', handleKeyUp)
        }
    }

    useEffect(movePlayer, [position, hasWon])

    useEffect(() => {
        if (hasWon) return
        const timer = setInterval(() => {
            const newTimeElapsed = timeElapsed + 1
            setTimeElapsed((prev) => prev + 1)
            if (newTimeElapsed !== 10) return
            // eslint-disable-next-line no-alert
            alert('time is up!')
            clearInterval(timer)
        }, 1000)
        // eslint-disable-next-line consistent-return
        return () => clearInterval(timer)
    }, [hasWon])

    return (
        <UserContext.Provider value={[user, setUser]}>
            {hasWon ? (
                <Win
                    setHasWon={setHasWon}
                    setPosition={setPosition}
                    movesMade={movesMade}
                    timeElapsed={timeElapsed}
                    setTimeElapsed={setTimeElapsed}
                />
            ) : (
                ''
            )}
            <Header />
            <Maze position={position} />
            <Footer timeElapsed={timeElapsed} />
        </UserContext.Provider>
    )
}

export default App
