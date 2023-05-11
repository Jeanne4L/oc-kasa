function Collapse({ title, paragraphText }) {
    return (
        <div className="collapse">
            <div className="collapse__title">
                <p>{title}</p>
            </div>
            <div className="collapse__text">
                <p>{paragraphText}</p>
            </div>
        </div>
    )
}

export default Collapse
