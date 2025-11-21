import { Link, useNavigate } from "react-router-dom";
import { UsersList } from "../components/UserList";

function Home() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null");

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <>
      <div className="main-container">
        <h2>Inicio</h2>

        {usuario ? (
          <>
            <h3>
              Bienvenido {usuario.nombre} {usuario.apellido}
            </h3>
            <p className="text-center">Has iniciado sesión correctamente.</p>

            <button
              style={{ marginTop: "20px", background: "#b91c1c" }}
              onClick={cerrarSesion}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <p className="text-center">Bienvenido!!</p>

            <div style={{ marginTop: "20px" }}>
              <Link to="/login">
                <button style={{ marginBottom: "10px" }}>Iniciar Sesión</button>
              </Link>

              <Link to="/registrar">
                <button>Registrarse</button>
              </Link>
            </div>
          </>
        )}
      </div>
      <UsersList />
    </>
  );
}

export default Home;
