import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

function Cadastro() {
  const API = "https://fakestoreapi.com/products";
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    if (id) {
      getElement(id);
    }
  }, [id]); //eslint-disable-line

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const getElement = async (id) => {
    try {
      const response = await axios.get(`${API}/${id}`).then((response) => {
        return response.data;
      });

      setFormData({
        title: response.title,
        price: response.price,
        description: response.description,
        category: response.category,
      });
      console.log("formData", formData);
    } catch (err) {
      console.error(err);
    }
  };

  function enviar(event) {
    event.preventDefault();
    if (!id) {
      try {
        axios.post(API, formData);
        alert("Cadastrado com sucesso");
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        axios.put(`${API}/${id}`, formData);
        alert("Atualizado com sucesso");
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }

    console.log(formData);
  }

  return (
    <>
      <div className="container">
        <h1>{id ? "Atualizar produto" : "Cadastro"}</h1>
        <form onSubmit={enviar} className="formulario">
          <div>
            <label>Título:</label>
            <input
              className="campo"
              name="title"
              onChange={handleChange}
              value={formData.title}
              type="text"
            />
          </div>
          <div>
            <label>Preço:</label>
            <input
              className="campo"
              name="price"
              onChange={handleChange}
              value={formData.price}
              type="number"
            />
          </div>
          <div>
            <label>Descrição:</label>
            <input
              className="campo"
              name="description"
              onChange={handleChange}
              value={formData.description}
              type="text"
            />
          </div>
          <div>
            <label>Categoria:</label>
            <input
              className="campo"
              name="category"
              onChange={handleChange}
              value={formData.category}
              type="text"
            />
          </div>
          <button className="enviar" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
