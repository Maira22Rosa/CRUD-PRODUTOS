import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Listagem() {
  const navigate = useNavigate();
  const API = "https://fakestoreapi.com/products";

  const [listagem, setListagem] = useState([]);

  const getAll = async () => {
    try {
      const response = await axios.get(API);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getById = (id) => {
    navigate(`/cadastro/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        setListagem(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>
        <h1>LISTAGEM</h1>
        <button onClick={() => navigate("/cadastro")}>NOVO</button>
        {listagem.map((element) => (
          <div key={element.id}>
            <p>Titulo: {element.title}</p>
            <p>Categoria: {element.description}</p>
            <p>Valor: {element.price}</p>
            <img width={50} height={50} src={element.image} />
            <button onClick={() => getById(element.id)}>Ver detalhes</button>
          </div>
        ))}
      </div>
    </>
  );
}
// https://fakestoreapi.com/docs

export default Listagem;
