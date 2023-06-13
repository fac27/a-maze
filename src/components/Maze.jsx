import { level1 } from './mazes.js'

export default function Maze() {
    return (
        <div className="maze-wrapper">
            {level1.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, cellIndex) => (
                        <div key={`${rowIndex},${cellIndex}`} className="cell">
                            {cell == 0 ? ' ' : cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
