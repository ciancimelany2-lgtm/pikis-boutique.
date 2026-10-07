function ProductCard({ product, onSelect }) {
  return (
    <article className="product-card">

      <div className="product-image-container">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <span
          className={
            product.type === "personalizable"
              ? "product-badge customizable"
              : "product-badge"
          }
        >
          {product.type === "personalizable"
            ? "Personalizable"
            : "No personalizable"}
        </span>

      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">

          <strong>
            ₡{product.price.toLocaleString("es-CR")}
          </strong>

          <button
            className="product-button"
            onClick={() => onSelect(product)}
          >
            Ver producto
          </button>

        </div>

      </div>

    </article>
  )
}

export default ProductCard