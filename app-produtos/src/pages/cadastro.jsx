import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Cadastro() {
  const API = "https://fakestoreapi.com/products";
  const navigate = useNavigate();
  const location = useLocation();
  const [initialDataId, setInitialDataId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    let id = location.pathname.split("/");
    if (id) {
      getElement(id[2]);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const getElement = (id) => {
    try {
      const response = axios.get(`${API}/${id}`);
      setFormData({
        title: response.,
        price: "",
        description: "",
        category: "",
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  function enviar(event) {
    event.preventDefault();
    try {
      axios.post(API, formData);
      alert("Cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    console.log(formData);
  }

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={enviar} className="formulario">
        <div>
          <label>Título:</label>
          <input
            name="title"
            onChange={handleChange}
            value={formData.title}
            type="text"
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            name="price"
            onChange={handleChange}
            value={formData.price}
            type="number"
          />
        </div>
        <div>
          <label>Descrição:</label>
          <input
            name="description"
            onChange={handleChange}
            value={formData.description}
            type="text"
          />
        </div>
        <div>
          <label>Categoria:</label>
          <input
            name="category"
            onChange={handleChange}
            value={formData.category}
            type="text"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Cadastro;
