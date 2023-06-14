import { useEffect, useState, useRef } from 'react'
import Maze from './components/Maze.jsx'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login.jsx'
import { UserContext } from './Context.js'
import { level1 } from './components/mazes.js'


function App() {
    const [user, setUser] = useState({
        name: 'tom',
        emoji: `👿`,
    })
    const [position, setPosition] = useState({ row: 0, column: 0 })
    const [startTime, setStartTime] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const started = useRef(false)

    function movePlayer() {
        const handleKeyUp = (e) => {
            if (!started.current) {
                setStartTime(new Date())
                started.current = true
            }
            // Define a mapping between keys and actions
            const keyMap = {
                ArrowUp: { row: position.row - 1, column: position.column },
                ArrowDown: { row: position.row + 1, column: position.column },
                ArrowLeft: { row: position.row, column: position.column - 1 },
                ArrowRight: { row: position.row, column: position.column + 1 },
            }

            // Check if the pressed key is in the keyMap
            if (keyMap.hasOwnProperty(e.key)) {
                const newPos = keyMap[e.key]

                // Verify the new position is within the boundaries
                if (
                    level1[newPos.row] === undefined ||
                    level1[newPos.row][newPos.column] === undefined
                ) {
                    const wrapper =
                        document.getElementsByClassName('maze-wrapper')[0]
                    wrapper.style.setProperty('outline', '2px solid red')
                    setTimeout(() => {
                        wrapper.style.removeProperty('outline')
                    }, 500)
                    // verify new pos is not a  wall
                } else if (level1[newPos.row][newPos.column] === 1) {
                    const cell = document.getElementById(
                        `${newPos.row}-${newPos.column}`
                    )
                    cell.style.backgroundColor = '#880808'
                    setTimeout(() => {
                        cell.style.backgroundColor = '#5d1d1d'
                    }, 500)
                    // else set new position
                } else {
                    setPosition(newPos)
                }
            }
            return true
        }
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keyup', handleKeyUp)
        }
    }

    useEffect(movePlayer, [position])

    return (
        <UserContext.Provider value={[user, setUser]}>
            <Header />
            {loggedIn ? (''
                
            ) : (
                <Login setLoggedIn={setLoggedIn} setPosition={setPosition} setUser={setUser}/>
            )}
            <Maze position={position} />
            <Footer startTime={startTime} />
        </UserContext.Provider>
    )
}

export default App
