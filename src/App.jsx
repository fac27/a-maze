import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
<Header/>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>

            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Footer/>
        </>
    )
}

export default App
