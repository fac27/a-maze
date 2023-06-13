
import {useState} from 'react'
import Maze from './components/Maze.jsx'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {UserContext} from './Context.js'


function App() {
    const [user, setUser] = useState({name: 'tom', emoji: `👿`, row: 1, column:1})

    return (
        <UserContext.Provider value={[user, setUser]}>
            <Header /> 
            <Maze />
            <Footer />
        </UserContext.Provider>
    )
}

export default App
