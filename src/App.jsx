
import {createContext, useState} from 'react'
import Maze from './components/Maze.jsx'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    const [user, setUser] = useState({name: '', emoji: ''})
    const userContext = createContext()

    return (
        <userContext.Provider value={[user, setUser]}>
            <Header />
            <Maze />
            <Footer />
        </userContext.Provider>
    )
}

export default App
