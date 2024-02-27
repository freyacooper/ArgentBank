import './index.scss';

function Feature({ img, title, content, altText }) {
    return (
        <div className="feature-item">
                <img src={img} alt={altText} className="feature-icon" />
                <h3 className="feature-item-title">{title}</h3>
                <p>{content}</p>
        </div>
    )
}

export default Feature