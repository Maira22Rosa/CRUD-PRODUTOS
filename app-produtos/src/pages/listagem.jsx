import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CardProdutos from "../components/card-produtos";
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
      <div style={{ paddingLeft: 20 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>LISTAGEM</h1>
          <button
            style={{ width: 100, height: 30 }}
            onClick={() => navigate("/cadastro")}
          >
            NOVO
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {listagem.map((element) => (
            <CardProdutos props={element} />
          ))}
        </div>
      </div>
    </>
  );
}
// https://fakestoreapi.com/docs

export default Listagem;
