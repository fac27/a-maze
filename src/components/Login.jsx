import { useState } from 'react'

const emojis = ['🚀', '🐋', '🦀', '🛁']

const Login = ({ setUser, setLoggedIn }) => {
    // const nameRef = useRef()
    // const emojiRef = useRef()
    const [name, setName] = useState('')
    const [emoji, setEmoji] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ name, emoji })
        localStorage.setItem(
            'New_Player',
            JSON.stringify({ name, emoji})
        )
        setLoggedIn(true)
    }

    return (
        <div className="flex modal">
            <form id="login" className="fit-content" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input autoComplete='off' id='name'value={name} onChange={(e)=> setName(e.target.value)}/>
                <label htmlFor="emoji">Emoji</label>
                <select id ='emoji' value={emoji} onChange={(e)=> setEmoji(e.target.value)}>
                    <option defaultValue="" disabled hidden>
                        Choose here
                    </option>
                    {emojis.map((emoji) => (
                        <option key={emoji} value={emoji}>
                            {emoji}{' '}
                        </option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
