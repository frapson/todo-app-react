import { useState } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'

import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <LoginComponent /> }></Route>
                    <Route path='/login' element={ <LoginComponent /> }></Route>
                    <Route path='/welcome' element={ <WelcomeComponent /> }></Route>

                </Routes>
            
            
            
            </BrowserRouter>
            Todo Management Application 
            
            
        </div>
    )
}
    



function LoginComponent() {

    const [username, setUsername] = useState('frapson')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setSuccessMessage] = useState('false')
    const [showErrorMessage, setErrorMessage] = useState('false')

    const navigate = useNavigate()
    

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    

    function handleSubmit() {
        if(username==='frapson' && password==='abc'){
            setSuccessMessage(true)
            setErrorMessage(false)
            navigate('/welcome')
        }else{
            setSuccessMessage(false)
            setErrorMessage(true)
        }
    }


    return (
        <div className="Login">
            {showSuccessMessage && <div className="successMessage">Success</div>}
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



function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}