import { useState } from "react"

function ProductCustomizer({ product, onClose, onAddToOrder }) {

  const [size, setSize] = useState("")
  const [material, setMaterial] = useState("")
  const [color, setColor] = useState("")
  const [sole, setSole] = useState("")
  const [design, setDesign] = useState("")

  const canContinue =
    size &&
    material &&
    color &&
    sole &&
    design

  return (
    <div className="customizer-overlay">

      <div className="customizer">

        <button
          className="customizer-close"
          onClick={onClose}
        >
          ×
        </button>


        {/* IMAGEN */}

        <div className="customizer-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>


        {/* INFORMACIÓN */}

        <div className="customizer-content">

          <p className="customizer-label">
            PERSONALIZA TU MODELO
          </p>

          <h2>
            {product.name}
          </h2>

          <p className="customizer-description">
            Selecciona las características que deseas
            para crear tu versión de este modelo.
          </p>


          {/* TALLA */}

          <div className="customizer-option">

            <label>
              1. Talla
            </label>

            <div className="option-buttons">

              {["35", "36", "37", "38", "39"].map(
                option => (

                  <button
                    key={option}
                    className={
                      size === option
                        ? "option-button selected"
                        : "option-button"
                    }
                    onClick={() => setSize(option)}
                  >
                    {option}
                  </button>

                )
              )}

            </div>

          </div>


          {/* MATERIAL */}

          <div className="customizer-option">

            <label>
              2. Material
            </label>

            <div className="option-buttons">

              {[
                "Cuero",
                "Gamuza",
                "Sintético"
              ].map(option => (

                <button
                  key={option}
                  className={
                    material === option
                      ? "option-button selected"
                      : "option-button"
                  }
                  onClick={() => setMaterial(option)}
                >
                  {option}
                </button>

              ))}

            </div>

          </div>


          {/* COLOR */}

          <div className="customizer-option">

            <label>
              3. Color
            </label>

            <div className="option-buttons">

              {[
                "Negro",
                "Blanco",
                "Beige",
                "Rosado"
              ].map(option => (

                <button
                  key={option}
                  className={
                    color === option
                      ? "option-button selected"
                      : "option-button"
                  }
                  onClick={() => setColor(option)}
                >
                  {option}
                </button>

              ))}

            </div>

          </div>


          {/* SUELA */}

          <div className="customizer-option">

            <label>
              4. Tipo de suela
            </label>

            <div className="option-buttons">

              {[
                "Clásica",
                "Plataforma"
              ].map(option => (

                <button
                  key={option}
                  className={
                    sole === option
                      ? "option-button selected"
                      : "option-button"
                  }
                  onClick={() => setSole(option)}
                >
                  {option}
                </button>

              ))}

            </div>

          </div>


          {/* DISEÑO */}

          <div className="customizer-option">

            <label>
              5. Diseño
            </label>

            <div className="option-buttons">

              {[
                "Original",
                "Modificar diseño",
                "Solicitar recreación"
              ].map(option => (

                <button
                  key={option}
                  className={
                    design === option
                      ? "option-button selected"
                      : "option-button"
                  }
                  onClick={() => setDesign(option)}
                >
                  {option}
                </button>

              ))}

            </div>

          </div>


          {/* RESUMEN */}

          <div className="customizer-summary">

            <p>
              Tu selección
            </p>

            <div>
              <span>Modelo</span>
              <strong>{product.name}</strong>
            </div>

            <div>
              <span>Talla</span>
              <strong>{size || "Sin seleccionar"}</strong>
            </div>

            <div>
              <span>Material</span>
              <strong>{material || "Sin seleccionar"}</strong>
            </div>

            <div>
              <span>Color</span>
              <strong>{color || "Sin seleccionar"}</strong>
            </div>

            <div>
              <span>Suela</span>
              <strong>{sole || "Sin seleccionar"}</strong>
            </div>

            <div>
              <span>Diseño</span>
              <strong>{design || "Sin seleccionar"}</strong>
            </div>

          </div>


          <button
  className="customizer-submit"
  disabled={!canContinue}
  onClick={() => {

    if (!canContinue) return

    const customizedProduct = {
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      material,
      color,
      sole,
      design
    }

    onAddToOrder(customizedProduct)
  }}
>
  Agregar al pedido
</button>

        </div>

      </div>

    </div>
  )
}

export default ProductCustomizer