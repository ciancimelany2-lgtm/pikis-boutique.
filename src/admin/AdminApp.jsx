import { useState } from "react";
import ProductsAdmin from "./components/ProductsAdmin";

export default function AdminApp() {
  const [section, setSection] = useState("Dashboard");

  const menu = ["Dashboard", "Productos", "Pedidos", "Clientes"];

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      background: "#f7f4f2",
      color: "#342b2b"
    }}>
      <aside style={{
        width: "240px",
        padding: "28px 20px",
        background: "#38272d",
        color: "white",
        boxSizing: "border-box"
      }}>
        <h2 style={{ marginBottom: "6px" }}>Piki's Boutique</h2>
        <p style={{ color: "#e8cbd5" }}>Panel administrativo</p>

        <nav style={{
          display: "grid",
          gap: "10px",
          marginTop: "35px"
        }}>
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setSection(item)}
              style={{
                padding: "13px",
                textAlign: "left",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                background: section === item ? "#d9a5b5" : "transparent",
                color: section === item ? "#38272d" : "white",
                fontWeight: "bold"
              }}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main style={{
        flex: 1,
        minWidth: 0,
        padding: "32px"
      }}>
        {section === "Dashboard" && (
          <>
            <h1>Dashboard</h1>
            <p>Bienvenida a la administración de Piki's Boutique.</p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "18px",
              marginTop: "28px"
            }}>
              {[
                ["Productos", "Gestiona tu catálogo"],
                ["Pedidos", "Consulta los pedidos"],
                ["Clientes", "Revisa tus clientes"]
              ].map(([title, description]) => (
                <button
                  key={title}
                  onClick={() => setSection(title)}
                  style={{
                    padding: "24px",
                    textAlign: "left",
                    background: "white",
                    border: "1px solid #eadde1",
                    borderRadius: "12px",
                    cursor: "pointer"
                  }}
                >
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <span>Ver sección →</span>
                </button>
              ))}
            </div>
          </>
        )}

        {section === "Productos" && <ProductsAdmin />}

        {section === "Pedidos" && (
          <>
            <h1>Pedidos</h1>
            <p>Aquí podrás consultar y gestionar los pedidos de la tienda.</p>
            <p>La lista de pedidos todavía debe conectarse a los datos reales.</p>
          </>
        )}

        {section === "Clientes" && (
          <>
            <h1>Clientes</h1>
            <p>Aquí podrás consultar la información de tus clientes.</p>
            <p>La lista de clientes todavía debe conectarse a los datos reales.</p>
          </>
        )}
      </main>
    </div>
  );
}