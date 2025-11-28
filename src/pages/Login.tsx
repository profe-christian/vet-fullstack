import { useState } from "react";
import { api } from "../api/client";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    correo: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/usuarios/login", form);

      localStorage.setItem("token",response.data.token);

      const usuario = response.data;
      localStorage.setItem("usuario", JSON.stringify(usuario));

      navigate("/");
    } catch (error) {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>

      <input
        type="email"
        name="correo"
        placeholder="Correo"
        required
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        required
        onChange={handleChange}
      />

      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;
