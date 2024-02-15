import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'


export default function LoginComponent() {

    const [username, setUsername] = useState('frapson')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setErrorMessage] = useState('false')

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }


    function handleSubmit() {
        if (authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
            setErrorMessage(true)
        }
    }


    return (
        <div className="Login">
            {showErrorMessage && <div className="errorMessage">Failed</div>}

            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>SUBMIT</button>
                </div>
            </div>

        </div>
    )
}