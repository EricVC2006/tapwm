import logo from './logo.svg';
import './App.css';
import ListaProdutos from './componentes/ListaProdutos';
import axios from 'axios';
import { useEffect, useState } from 'react';


const produtos = [{
  nome : "teste",
  preco: 20.00,
},
{
  nome:"teste2",
  preco:20.00,
},
];


function App() {
  const [produtos,setProdutos] = useState([]);
  useEffect(() =>{ carregaPodutos,();

   }, []),
  function carregaProdutos(){

    axios.get('htttps://app-api-tapwm.orderer.com/api/produtos')
    .then(res=>(
      setProdutos (res.data);
      console.log(produtos);
    ));
  }

  return (
 <div>
    <h1>Lista Produtos</h1>
    <ListaProdutos produtos = {produtos} />

 </div>
  );
}

export default App;
