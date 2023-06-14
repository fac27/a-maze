
const Header = ({user}) => {
    return (
        <header className="flex-center grey-background">
            <p className="name">{user.name}</p>
            <h1>A-MAZE</h1>
            <p className="score">score</p>
        </header>
    )
}

export default Header
