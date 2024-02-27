import './index.scss'

function Button({ buttonText, classProp, }) {
    return (
        <button className={classProp}>{buttonText}</button>
    )
}

export default Button