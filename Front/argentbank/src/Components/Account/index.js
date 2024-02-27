import Button from '../Button';
import './index.scss';

function Account({ acccountName, accountBalance, description }) {
    return(
        <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{acccountName}</h3>
                    <p className="account-amount">{accountBalance}</p>
                    <p className="account-amount-description">{description}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Button buttonText="View transactions" classProp="button transactionButton"/>
                </div>
        </section>
    )
}
export default Account