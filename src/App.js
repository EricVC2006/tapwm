
import './App.css';
import ListaProdutos from './componentes/ListaProdutos';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CadastroProduto from './componentes/CadastroProduto';
import BarraMenu from './componentes/BarraMenu';

function App() {
  const [produtos,setProdutos] = useState([]);
  useEffect(() =>{
     carregaProdutos();
   }, []);

  function carregaProdutos(){

    axios.get('https://app-api-tapwm.onrender.com/api/produtos')
    .then(res=>{
      setProdutos ( res.data);
      //console.log(produtos);
    });
  }

  return (
 <div>
  <BarraMenu />
    <h1>Lista Produtos</h1>
    <ListaProdutos produtos = {produtos} />
    <CadastroProduto carregaProdutos= {carregaProdutos}/>
 </div>
  );
}

export default App;
