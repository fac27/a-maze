import { useContext } from 'react'
import {UserContext} from '../Context.js'

const Player = () =>{
    const [user] = useContext(UserContext)
    console.log(user.emoji)
    return (
        <div>
            <p>{user.emoji}</p>
        </div>
    )
}
export default Player