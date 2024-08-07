import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
function CardProdutos({ props }) {
  const API = "https://fakestoreapi.com/products";
  const { id, title, description, price, image } = props;
  const navigate = useNavigate();
  const getById = () => {
    navigate(`/cadastro/${id}`);
  };

  const excluir = () => {
    try {
      axios.delete(`${API}/${id}`);
      alert("Exlcluida com sucesso");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="card" key={id}>
      <p>Titulo: {title}</p>
      <p>Categoria: {description}</p>
      <p>Valor: {price}</p>
      <img width={50} height={50} src={image} />
      <button onClick={() => getById()}>Ver detalhes</button>
      <button className="excluir" onClick={() => excluir()}>
        Excluir
      </button>
    </div>
  );
}

export default CardProdutos;
