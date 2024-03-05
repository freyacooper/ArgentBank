import Button from "../../Components/Button";
import './index.scss';
import Account from "../../Components/Account";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function User() {

    const authToken = useSelector((state) => state.auth.token)
    const firstNameValue = useSelector((state) => state.firstName.firstName)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(authToken)
    console.log(firstNameValue)

    useEffect(
        () => {
            if(!authToken) {
                navigate('/')
            } else {
                fetch("http://localhost:3001/api/v1/user/profile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken}`,
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
                    dispatch({
                        type: "firstName/setFirstName",
                        payload: data.body.firstName,
                    })
                })
                .catch(error => {
                    console.log(error.message)
                })
            }
        }
    ) 

    return (
        <main className="main bg-dark">
            <div className="header">
                { firstNameValue ? (<h1>Welcome back<br />{firstNameValue}</h1>) : (null)}
                
                <Button buttonText="Edit Name" classProp="button smallButton"/>
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