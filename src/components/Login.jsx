import { useEffect, useState } from 'react'
import InputEmoji from 'react-input-emoji'

const Login = () => {
    const [emoji, setEmoji] = useState('')

    useEffect(() => {
        const emojiOutput = document.getElementsByClassName('react-input-emoji--container')[0];
        if (emojiOutput) {
          emojiOutput.style.display = 'none';
        }
    }, [])

    const handleEmojiChange = (newEmoji) => {
        const emojiInput = document.getElementsByClassName('react-input-emoji--button')[0];

        setEmoji(newEmoji)
    }
    const handleSubmit = (e) => {
        const emoji = document.getElementsByClassName(
            'class="react-input-emoji--input'
        )[0].firstChild.innerHTML
        e.preventDefault()
    }

    return (
        <div className="flex modal">
            <form className="fit-content">
                <label name="name">Name</label>
                <input type="text" name="name" />
                <label name="emoji">emoji</label>
                <InputEmoji
                    className=""
                    value={emoji}
                    onChange={handleEmojiChange}
                    // onEnter={handleSubmit}
                    cleanOnEnter
                    placeholder=""
                    maxLength={1}
                />
                {emoji && <p>{emoji}</p>}
                <button type="submit">Submit</button>
            </form>

        </div>
        

        
    )
}

export default Login
