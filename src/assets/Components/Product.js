function Product({text, image, title, description, price }) {
    return(
        <article>

            <span>{text}</span>
            <img src={image} alt={title} />
            <p>{description}</p>
            <h4>{price}</h4>

        </article>
    );
}

export default Product;