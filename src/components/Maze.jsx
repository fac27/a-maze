import { useContext } from 'react'
import { UserContext } from '../Context.js'
import { level1 } from './mazes.js'
import Player from './Player.jsx'

export default function Maze() {
    const [user] = useContext(UserContext)

    const userCheckPosition = (row, rowIndex, column, columnIndex) =>{
        if(user.row === row && user.column === column){
           return <Player/> 
        } else {
            return  <div key={`${rowIndex},${columnIndex}`} className={`cell ${column === 1 ? 'wall' : 'path'}`}>
                {column == 0 ? '' : column}
            </div>
        }
    }
    
    return (
        <div className="maze-wrapper">
            {level1.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((column, columnIndex) => (
                        userCheckPosition(row, rowIndex, column, columnIndex)                            
                    ))}
                </div>
            ))}
        </div>
    )
}
