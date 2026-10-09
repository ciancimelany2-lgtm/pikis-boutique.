import { useState } from "react";

function ProductsAdmin() {
  const [showForm, setShowForm] = useState(false);

  const [products, setProducts] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const emptyProduct = {
    name: "",
    price: "",
    category: "No personalizable",
    description: "",
    image: "",
    available: true,
  };

  const [product, setProduct] = useState(emptyProduct);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setProduct({
      ...product,
      image: imageUrl,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingId !== null) {
      setProducts(
        products.map((item) =>
          item.id === editingId
            ? {
                ...product,
                id: editingId,
              }
            : item
        )
      );

      alert("Producto actualizado correctamente");
    } else {
      const newProduct = {
        ...product,
        id: Date.now(),
      };

      setProducts([...products, newProduct]);

      alert("Producto agregado correctamente");
    }

    setProduct(emptyProduct);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setProduct({
      name: item.name,
      price: item.price,
      category: item.category,
      description: item.description,
      image: item.image,
      available: item.available,
    });

    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "¿Seguro que quieres eliminar este producto?"
    );

    if (!confirmed) return;

    setProducts(products.filter((item) => item.id !== id));
  };

  const handleCancel = () => {
    setProduct(emptyProduct);
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <main>
      <h1>Productos</h1>

      <button onClick={() => setShowForm(true)}>
        + Agregar producto
      </button>

      {showForm && (
        <section>
          <h2>
            {editingId !== null
              ? "Editar producto"
              : "Agregar producto"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre del producto</label>
              <br />

              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Ej. Sandalia Aurora"
                required
              />
            </div>

            <br />

            <div>
              <label>Precio</label>
              <br />

              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Ej. 25000"
                min="0"
                required
              />
            </div>

            <br />

            <div>
              <label>Categoría</label>
              <br />

              <select
                name="category"
                value={product.category}
                onChange={handleChange}
              >
                <option value="No personalizable">
                  No personalizable
                </option>

                <option value="Personalizable">
                  Personalizable
                </option>
              </select>
            </div>

            <br />

            <div>
              <label>Descripción</label>
              <br />

              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Describe el producto..."
                rows="4"
              />
            </div>

            <br />

            <div>
              <label>Imagen del producto</label>
              <br />

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {product.image && (
              <div>
                <br />

                <p>Vista previa:</p>

                <img
                  src={product.image}
                  alt="Vista previa del producto"
                  width="200"
                />

                <br />

                <button
                  type="button"
                  onClick={() =>
                    setProduct({
                      ...product,
                      image: "",
                    })
                  }
                >
                  Eliminar imagen
                </button>
              </div>
            )}

            <br />

            <div>
              <label>
                <input
                  type="checkbox"
                  name="available"
                  checked={product.available}
                  onChange={handleChange}
                />

                Producto disponible
              </label>
            </div>

            <br />

            <button type="submit">
              {editingId !== null
                ? "Guardar cambios"
                : "Guardar producto"}
            </button>

            <button type="button" onClick={handleCancel}>
              Cancelar
            </button>
          </form>
        </section>
      )}

      <section>
        <h2>Lista de productos</h2>

        {products.length === 0 ? (
          <p>
            Aún no hay productos registrados.
          </p>
        ) : (
          <div>
            {products.map((item) => (
              <article key={item.id}>
                <hr />

                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    width="150"
                  />
                )}

                <h3>{item.name}</h3>

                <p>
                  <strong>Precio:</strong> ₡{item.price}
                </p>

                <p>
                  <strong>Categoría:</strong>{" "}
                  {item.category}
                </p>

                <p>
                  <strong>Descripción:</strong>{" "}
                  {item.description}
                </p>

                <p>
                  <strong>Estado:</strong>{" "}
                  {item.available
                    ? "Disponible"
                    : "No disponible"}
                </p>

                <button onClick={() => handleEdit(item)}>
                  Editar
                </button>

                <button onClick={() => handleDelete(item.id)}>
                  Eliminar
                </button>
              </article>
           ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default ProductsAdmin;