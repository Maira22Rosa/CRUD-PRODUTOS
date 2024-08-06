import { useEffect, useState } from "react"
import axios from "axios";
function Listagem(){
   const API='https://fakestoreapi.com/products';

    const [listagem, setListagem]=useState([]);

    const getAll = async () => {
        try {
            const response = await axios.get(API);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const post=()=>{
        try {
            axios.post(API,{
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
            })
        }catch(error){
            console.error(error);
        }
    }

   
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
   return( <>
        <div>
            <h1>LISTAGEM</h1>
            <button onClick={post}>NOVO</button>
            {listagem.map((element) => (
                <div key={element.id}>
                    <p>Titulo: {element.title}</p> 
                    <p>Categoria: {element.description}</p>  
                    <p>Valor: {element.price}</p>  
                    <img width={50} height={50} src={element.image}/>
                </div>
            ))}
        </div>
    </>)
}
// https://fakestoreapi.com/docs

export default Listagem