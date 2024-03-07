import './index.scss';
import Button from '../../Components/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SignIn() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [remember, setRemember] = useState(false)

    useEffect(() => {
        const lsToken = window.localStorage.getItem('token')
        if(lsToken) {
            navigate('/user')
        }
    })

    function handleClick(event) {
        event.preventDefault();
        const userInput = {
            "email" : email,
            "password" : password
        }
        const inputString = JSON.stringify(userInput)
        fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: inputString
        })
        .then(res => {
            if(res.status === 200) {
                return res.json()
            }
            else {
                throw new Error("Erreur dans l'identifiant ou le mot de passe")
            }
        })
        .then(data => {
            dispatch({
                type: "auth/setToken",
                payload: data.body.token
            })
            if(remember) {
                window.localStorage.setItem('token', data.body.token)
            }
            navigate('/user')
        })
        .catch(error => {
            setErrorMessage(error.message)
        })
    }

    return (
         <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(event) => handleClick(event)}> 
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={(event) => setEmail(event.target.value)} onClick={() => setErrorMessage('')}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} onClick={() => setErrorMessage('')}/>
                    </div>
                    { errorMessage ? (
                        <div>
                        <p>{errorMessage}</p>
                        </div>
                    ) : (null)
                    }
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" onChange={() => setRemember(!remember)}/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Button buttonText="Sign In" classProp="button"  />
                </form>
            </section>
        </main>
    )
}
export default SignIn