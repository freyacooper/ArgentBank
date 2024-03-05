import './index.scss'
import argentBankLogo from '../../Assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearToken } from '../../Redux/auth'

function Header() {

    const authToken = useSelector((state) => state.auth.token)
    const firstNameValue = useSelector((state) => state.firstName.firstName)
    const dispatch = useDispatch()

    function handleSignout() {
        dispatch(clearToken())
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
                { authToken ? (
                    <div>
                        <Link className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {firstNameValue}
                        </Link>
                        <Link class="main-nav-item" to="/" onClick={() => handleSignout()}>
                            <i class="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </div>
                ) : (
                    <div>
                    <Link className="main-nav-item" to="/sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                    </div>
                )} 
        </nav>
    )   
}

export default Header