import { useRef } from 'react'

const Login = ({ setUser, setLoggedIn }) => {
    const nameRef = useRef()
    const emojiRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newName = nameRef.current.value
        const newEmoji = emojiRef.current.value
        setUser({ name: newName, emoji: newEmoji })
        setLoggedIn(true)
    }

    const emojis = ['🚀', '🐋', '🦀', '🛁']

    return (
        <div className="flex modal">
            <form className="fit-content" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input ref={nameRef} type="text" id="name" name="name" />
                <label htmlFor="emoji">Emoji</label>
                <select ref={emojiRef}>
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
