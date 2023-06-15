import { useState} from 'react'
const emojis = ['🚀', '🐋', '🦀', '🛁']

const Login = ({ setUser, setLoggedIn }) => {
const [name, setName] = useState('')
const[newEmoji, setNewEmoji] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ name, emoji: newEmoji })
        localStorage.setItem(
            'New_Player',
            JSON.stringify({ name, emoji: newEmoji })
        )
        setLoggedIn(true)
    }

    return (
        <div className="flex modal">
            <form id="login" className="fit-content" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input autoComplete='off'value ={name} id='name' onChange={(e)=> setName(e.target.value)} />
                <label htmlFor="emoji">Emoji</label>
                <select id='emoji' value={newEmoji} onChange={(e)=> setNewEmoji(e.target.value)}>
                <option value="" disabled hidden>
                    Choose here
                </option>
                {emojis.map((emoji) => (
                    <option key={emoji} value={emoji}>
                        {emoji}
                    </option>
                ))}
            </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
