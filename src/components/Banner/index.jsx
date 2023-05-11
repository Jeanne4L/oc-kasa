function Banner({ backgroundImage, paragraphText }) {
    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                width: '300px',
                height: '300px',
            }}
        >
            {paragraphText && <p>{paragraphText}</p>}
        </div>
    )
}

export default Banner
