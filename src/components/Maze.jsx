import { level1 } from './mazes.js'

export default function Maze() {
    return (
        <section className="flex-center">
            <div className="maze-wrapper">
                {level1.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, cellIndex) => (
                            // player if exists at the coords
                            <div
                                key={`${rowIndex},${cellIndex}`}
                                className={`cell ${
                                    cell === 1 ? 'wall' : 'path'
                                }`}
                            >
                                {cell == 0 ? ' ' : cell}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}
