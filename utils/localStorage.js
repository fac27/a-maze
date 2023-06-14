const saveUser = ({ user }) => {
    localStorage.setItem({ userName: user.name, sprite: user.emoji })
}

const getUser = () => {
    const localData = localStorage.getItem('New_Player')
    return localData !== null ? JSON.parse(localData) : []
}

export { getUser, saveUser }
