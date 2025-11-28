import { useState } from "react";
import { api } from "../api/client";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    fechaNacimiento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/usuarios", form);
      alert("Registro exitoso!");
      navigate("/"); // redirige al home
    } catch (error) {
      alert("Error al registrar usuario");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        required
        onChange={handleChange}
      />
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
      <input
        type="date"
        name="fechaNacimiento"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="tipoUsuario"
        placeholder="Tipo de usuario"
        required
        onChange={handleChange}
      />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;
