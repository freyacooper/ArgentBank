import './index.scss';
import Button from '../../Components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleClick(event) {
        event.preventDefault();
        const userInput = {
            "email" : email,
            "password" : password
        }
        const inputString = JSON.stringify(userInput)
        console.log(inputString)
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
            console.log(data.body.token)
            navigate('/user')
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
         <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(event) => handleClick(event)}> 
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                    <Button buttonText="Sign In" classProp="button"  />
                </form>
            </section>
        </main>
    )
}
export default SignIn