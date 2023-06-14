import { useContext } from 'react'
import { UserContext } from '../Context.js'

const Player = (key) => {
    const [user] = useContext(UserContext)
    return (
        <div key={key} className="cell player path">
            <p>{user.emoji}</p>
        </div>
    )
}
export default Player
