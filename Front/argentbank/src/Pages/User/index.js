import Button from "../../Components/Button";
import './index.scss';
import Account from "../../Components/Account";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function User() {

    const authToken = useSelector((state) => state.auth.token)
    const userNameValue = useSelector((state) => state.userName.userName)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [editUsername, setEditUsername] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [newUsername, setNewUsername] = useState("")

    useEffect(() => {
        const lsToken = window.localStorage.getItem('token')
            if(lsToken) {
                dispatch({
                type: "auth/setToken",
                payload: lsToken
                })
            }
            
            if(!authToken && !lsToken) {
                navigate('/')
            } else {
                fetch("http://localhost:3001/api/v1/user/profile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken || lsToken}`,
                     },
                })
                .then(res => {
                    if(res.status === 200) {
                        return res.json()
                    }
                    else {
                        throw new Error("Erreur lors de la récupération des données.")
                    }
                })
                .then(data => {
                    setFirstName(data.body.firstName)
                    setLastName(data.body.lastName)
                    dispatch({
                        type: "userName/setUserName",
                        payload: data.body.userName,
                    })
                })
                .catch(error => {
                    console.log(error.message)
                })
            }
        }, []
    ) 
    function saveUsername() {
        console.log(newUsername)
        dispatch({
            type: "userName/setUserName",
            payload: newUsername,
        })
        setEditUsername(false)
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                { !editUsername ? (
                    <>
                    <h1>Welcome back<br />{userNameValue}</h1>
                    <Button buttonText="Edit Name" classProp="button smallButton" onClick={() => setEditUsername(true)}/>
                    </>
                ) : (
                    <div className="edit-wrapper">
                        <h1>Edit user info</h1>    
                        <div > 
                            <label htmlFor="username">User name : </label>
                            <input type="text" id="username" defaultValue={userNameValue} onChange={(event) => setNewUsername(event.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor="first-name">First name : </label>
                            <input type="text" id="first-name" defaultValue={firstName} disabled="true"></input>
                        </div>
                        <div>
                            <label htmlFor="last-name">Last name : </label>
                            <input type="text" id="last-name" defaultValue={lastName} disabled="true"></input>
                        </div>
                        <div className="button-wrapper">
                            <Button buttonText="Save" classProp="button" onClick={() => saveUsername()}/>
                            <Button buttonText="Cancel" classProp="button" onClick={() => setEditUsername(false)}/>
                        </div>
                    </div>)
                    
                
                }           

            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account 
                acccountName="Argent Bank Checking (x8349)" 
                accountBalance="$2,082.79" 
                description="Available Balance"
            />
            <Account 
                acccountName="Argent Bank Savings (x6712)" 
                accountBalance="$10,928.42" 
                description="Available Balance"
            />
            <Account 
                acccountName="Argent Bank Credit Card (x8349)" 
                accountBalance="$184.30" 
                description="Current Balance"
            />
        </main>
    )
}

export default User