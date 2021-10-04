function Tile({image, title, text, children}) {
    return(
        <section>
            {<img src={image} alt={title} />}
            <h2>{title}</h2>
            <p>{text}</p>
            {children}
        </section>
    );
}

export default Tile;