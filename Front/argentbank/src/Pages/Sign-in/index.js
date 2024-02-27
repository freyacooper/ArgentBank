import './index.scss';
import Button from '../../Components/Button';
import { useState } from 'react';

function SignIn() {

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
                    {/* <a href="./user.html" class="sign-in-button">Sign In</a> */}
                    <Button buttonText="Sign In" classProp="button"  />
                </form>
            </section>
        </main>
    )
}
export default SignIn