import axios from "axios";

export default function CadastroProduto({carregaProdutos}) {
    return (
        <div className='card'>
            <h3 className='titulo'>Cadastro de Produto</h3>
            <form>
                <label>Nome:</label>
                <input type='text' id='nome' name='nome'>
                </input>
                <label>Preço:</label>
                <input type='text' id='preco' name='preco'>
                </input>
                <button type='button' 
                onClick={adicionaProduto}>Adicionar</button>
            </form>
        </div>
    );

    function adicionaProduto(){
        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;
        const foto = document.getElementById('foto').value;
        const descricao = document.getElementById('descricao').value;
        const produto = {nome, preco, foto, descricao};
        console.log(produto);
        axios.post('https://app-api-tapwm.onrender.com/api/produtos', 
            produto)
        .then(()=>{
            carregaProdutos();
        });
    }
}