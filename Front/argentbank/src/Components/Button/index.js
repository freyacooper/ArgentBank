import './index.scss'

function Button({ buttonText, classProp, onClick }) {
    return (
        <button className={classProp} onClick={onClick}>{buttonText}</button>
    )
}

export default Button