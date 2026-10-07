import { useState } from "react"
import "./App.css"
import ProductCard from "./components/ProductCard"
import ProductCustomizer from "./components/ProductCustomizer"

function App() {

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [customizingProduct, setCustomizingProduct] = useState(null)

  const products = [
    {
      id: 1,
      name: "Modelo Aurora",
      price: 35000,
      type: "personalizable",
      category: "Tacones",
      description:
        "Diseña este modelo seleccionando el material, color y tipo de suela.",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80"
    },

    {
      id: 2,
      name: "Modelo Valentina",
      price: 28000,
      type: "personalizable",
      category: "Sandalias",
      description:
        "Personaliza este diseño para crear un calzado único.",
      image:
        "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=80"
    },

    {
      id: 3,
      name: "Modelo Roma",
      price: 25000,
      type: "no-personalizable",
      category: "Zapatos",
      description:
        "Modelo disponible exactamente como aparece en las fotografías.",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
    },

    {
      id: 4,
      name: "Modelo Sofia",
      price: 32000,
      type: "personalizable",
      category: "Tacones",
      description:
        "Elige diferentes características para adaptar el modelo a tu estilo.",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80"
    },

    {
      id: 5,
      name: "Modelo París",
      price: 30000,
      type: "no-personalizable",
      category: "Sandalias",
      description:
        "Diseño disponible tal como se muestra en las fotografías.",
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80"
    },

    {
      id: 6,
      name: "Modelo Atenea",
      price: 37000,
      type: "personalizable",
      category: "Tacones",
      description:
        "Crea una versión personalizada escogiendo sus características.",
      image:
        "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=900&q=80"
    }
  ]

  const personalizables = products.filter(
    product => product.type === "personalizable"
  )

  const noPersonalizables = products.filter(
    product => product.type === "no-personalizable"
  )

  return (
    <div>

      <nav className="navbar">

        <div className="logo">
          PIKI'S <span>SHOES</span>
        </div>

        <div className="nav-links">

          <a href="#inicio">Inicio</a>

          <a href="#catalogo">Catálogo</a>

          <a href="#personalizables">Personalizables</a>

          <a href="#nosotros">Nosotros</a>

          <a href="#contacto">Contacto</a>

        </div>

        <button className="order-button">
          Mi pedido
        </button>

      </nav>


      <section className="hero" id="inicio">

        <div className="hero-content">

          <p className="hero-small">
            PIKI'S BOUTIQUE
          </p>

          <h1>
            Calzado
            <br />
            <span>creado para ti.</span>
          </h1>

          <p>
            Descubre nuestra colección de calzado femenino
            y crea diseños que reflejen tu estilo.
          </p>

          <a href="#catalogo" className="hero-button">
            Ver catálogo
          </a>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85"
            alt="Calzado Piki's Shoes"
          />

        </div>

      </section>


      <section className="categories">

        <div className="section-heading">

          <p>DESCUBRE</p>

          <h2>
            Encuentra tu estilo
          </h2>

        </div>


        <div className="category-grid">

          <a
            href="#personalizables"
            className="category-card"
          >

            <div className="category-image">

              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80"
                alt="Calzado personalizable"
              />

            </div>

            <div className="category-content">

              <span>01</span>

              <h3>
                Personalizables
              </h3>

              <p>
                Diseña tu calzado eligiendo diferentes
                materiales, colores y características.
              </p>

              <strong>
                Explorar →
              </strong>

            </div>

          </a>


          <a
            href="#no-personalizables"
            className="category-card"
          >

            <div className="category-image">

              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80"
                alt="Calzado no personalizable"
              />

            </div>

            <div className="category-content">

              <span>02</span>

              <h3>
                No personalizables
              </h3>

              <p>
                Diseños disponibles exactamente como
                aparecen en nuestras fotografías.
              </p>

              <strong>
                Explorar →
              </strong>

            </div>

          </a>

        </div>

      </section>


      <section
        className="products-section"
        id="catalogo"
      >

        <div className="section-heading">

          <p>COLECCIÓN</p>

          <h2>
            Nuestros modelos
          </h2>

          <span>
            Descubre algunos de nuestros diseños.
          </span>

        </div>


        <div
          className="product-category-section"
          id="personalizables"
        >

          <div className="category-title">

            <div>

              <p>PERSONALIZABLES</p>

              <h3>
                Crea algo único
              </h3>

            </div>

            <span>
              {personalizables.length} modelos
            </span>

          </div>


          <div className="products-grid">

            {personalizables.map(product => (

              <ProductCard
                key={product.id}
                product={product}
                onSelect={setSelectedProduct}
              />

            ))}

          </div>

        </div>


        <div
          className="product-category-section"
          id="no-personalizables"
        >

          <div className="category-title">

            <div>

              <p>NO PERSONALIZABLES</p>

              <h3>
                Diseños listos para ti
              </h3>

            </div>

            <span>
              {noPersonalizables.length} modelos
            </span>

          </div>


          <div className="products-grid">

            {noPersonalizables.map(product => (

              <ProductCard
                key={product.id}
                product={product}
                onSelect={setSelectedProduct}
              />

            ))}

          </div>

        </div>

      </section>


      <section className="custom-section">

        <div className="custom-content">

          <p>
            TU ESTILO, TU DISEÑO
          </p>

          <h2>
            Personaliza tu
            <br />
            próximo par.
          </h2>

          <span>
            Elige el modelo que más te guste y
            personalízalo según tu estilo.
          </span>

          <a
            href="#personalizables"
            className="custom-button"
          >
            Ver personalizables →
          </a>

        </div>

      </section>


      <section
        className="about-section"
        id="nosotros"
      >

        <div>

          <p>
            SOBRE PIKI'S
          </p>

          <h2>
            Calzado hecho
            <br />
            pensando en ti.
          </h2>

        </div>

        <div className="about-text">

          <p>
            En Piki's Boutique creemos que cada persona
            tiene un estilo único.
          </p>

          <p>
            Por eso ofrecemos diseños de calzado femenino
            que puedes personalizar para crear algo que
            realmente represente tu personalidad.
          </p>

        </div>

      </section>


      <section
        className="contact-section"
        id="contacto"
      >

        <div>

          <p>
            ¿TIENES ALGUNA DUDA?
          </p>

          <h2>
            Hablemos.
          </h2>

        </div>

        <div className="contact-info">

          <a href="tel:+50664798931">
            +506 6479 8931
          </a>

          <a href="mailto:garitak348@gmail.com">
            garitak348@gmail.com
          </a>

        </div>

      </section>


      <footer>

        <div className="logo">
          PIKI'S <span>SHOES</span>
        </div>

        <p>
          © 2026 Piki's Boutique. Todos los derechos reservados.
        </p>

      </footer>


      {selectedProduct && (

        <div
          className="product-modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="product-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />

            <div className="modal-content">

              <p>
                {selectedProduct.type === "personalizable"
                  ? "PERSONALIZABLE"
                  : "NO PERSONALIZABLE"}
              </p>

              <h2>
                {selectedProduct.name}
              </h2>

              <span className="modal-price">
                ₡{selectedProduct.price.toLocaleString("es-CR")}
              </span>

              <p>
                {selectedProduct.description}
              </p>


              {selectedProduct.type === "personalizable" && (

                <div className="custom-options">

                  <h4>
                    Este modelo puede personalizarse.
                  </h4>

                  <p>
                    En el siguiente paso agregaremos
                    las opciones de material, color,
                    suela y talla.
                  </p>

                </div>

              )}


             <button
  className="modal-order-button"
  onClick={() => {
    setSelectedProduct(null)
    setCustomizingProduct(selectedProduct)
  }}
>
  Personalizar este modelo
</button>

            </div>

          </div>

        </div>

      )}
{customizingProduct && (
  <ProductCustomizer
    product={customizingProduct}
    onClose={() => setCustomizingProduct(null)}
  />
)}
    </div>
  )
}

export default App