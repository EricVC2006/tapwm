import logo from './logo.svg';
import './App.css';
import ListaProdutos from './componentes/ListaProdutos';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [produtos,setProdutos] = useState([]);
  useEffect(() =>{
     carregaPodutos();
   }, []),

  function carregaProdutos(){

    axios.get('htttps://app-api-tapwm.orderer.com/api/produtos')
    .then(res=>{
      setProdutos ( res.data);
      //console.log(produtos);
    });
  }

  return (
 <div>
    <h1>Lista Produtos</h1>
    <ListaProdutos produtos = {produtos} />

 </div>
  );
}

export default App;
