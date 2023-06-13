import { useEffect, useState } from 'react'
import Maze from './components/Maze.jsx'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { UserContext } from './Context.js'
import { level1 } from './components/mazes.js'

function App() {
    const [user, setUser] = useState({
        name: 'tom',
        emoji: `👿`,
    })
    const [position, setPosition] = useState({ row: 0, column: 0 })
    function movePlayer() {
        const handleKeyDown = (e) => {
            // Define a mapping between keys and actions
            const keyMap = {
                ArrowUp: { row: position.row -1, column: position.column },
                ArrowDown: { row: position.row +1, column: position.column },
                ArrowLeft: { row: position.row, column: position.column -1 },
                ArrowRight: { row: position.row, column: position.column +1},
            }

            // Check if the pressed key is in the keyMap
            if (keyMap.hasOwnProperty(e.key)) {
                const newPos = keyMap[e.key]

                // Verify the new position is within the boundaries and is not a wall
                if (
                    level1[newPos.row] !== undefined && level1[newPos.row][newPos.column] !== undefined &&
                    level1[newPos.row][newPos.column] !== 1
                ) {
                    setPosition(newPos)
                } else{
                   return console.log('bad move')
                }
            }
            return true
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }

    useEffect(movePlayer, [position])

    return (
        <UserContext.Provider value={[user, setUser]}>
            <Header />
            <Maze position={position} />
            <Footer />
        </UserContext.Provider>
    )
}

export default App
