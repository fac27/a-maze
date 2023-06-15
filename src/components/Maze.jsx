// import { useContext } from 'react'
// import { UserContext } from '../Context.js'
import { level1 } from './mazes.js'
import Player from './Player.jsx'

const UserCheckPosition = ({ rowIndex, column, columnIndex, position }) => {
    if (position.row === rowIndex && position.column === columnIndex) {
        return <Player />
    }
    return (
        <div
            id={`${rowIndex}-${columnIndex}`}
            className={`cell ${
                column === '🏁' ? 'win-cell' : column === 1 ? 'wall' : ''
            }`}
        >
            {column != 0 && column}
        </div>
    )
}

export default function Maze({ position }) {
    return (
        <div className="maze-wrapper">
            {level1.map((row, rowIndex) => (
                <div key={`row-${rowIndex}`} className="row">
                    {row.map((column, columnIndex) => (
                        <UserCheckPosition
                            key={`${rowIndex}-${columnIndex}`}
                            rowIndex={rowIndex}
                            column={column}
                            columnIndex={columnIndex}
                            position={position}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}
