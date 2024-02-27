import Button from "../../Components/Button";
import './index.scss';
import Account from "../../Components/Account";

function User() {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
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