// import { useContext } from 'react'
// import { UserContext } from '../Context.js'
import { level1 } from './mazes.js'
import Player from './Player.jsx'

const Maze = ({ position }) => {
    const userCheckPosition = (row, rowIndex, column, columnIndex) => {
        if (position.row === rowIndex && position.column === columnIndex) {
            return <Player />
        } else {
            return (
                <div
                    key={`${rowIndex}-${columnIndex}`}
                    className={`cell ${column === 1 ? 'wall' : 'path'}`}
                >
                    {column == 0 ? '' : column}
                </div>
            )
        }
    }

    return (
        <div className="maze-wrapper">
            {level1.map((row, rowIndex) => (
                <div key={`row${rowIndex}`} className="row">
                    {row.map((column, columnIndex) =>
                        userCheckPosition(row, rowIndex, column, columnIndex)
                    )}
                </div>
            ))}
        </div>
    )
}
export default Maze
