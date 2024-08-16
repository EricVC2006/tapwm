import logo from './logo.svg';
import './App.css';
import ListaProdutos from './componentes/ListaProdutos';

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
  return (
 <div>
    <h1>Lista Produtos</h1>
    <ListaProdutos produtos = {produtos} />

 </div>
  );
}

export default App;
