import { useContext } from 'react'
import { UserContext } from '../Context.js'

const Player = () => {
    const [user] = useContext(UserContext)
    return (
        <div key="me" className="cell player path">
            <p>{user.emoji}</p>
        </div>
    )
}
export default Player
