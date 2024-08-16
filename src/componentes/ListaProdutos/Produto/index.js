import ListaProdutos from "..";

const Produto = ({valor}) => {
    return  (
        <div>
            <h3>{valor.nome} </h3>
            <p> Preç: {valor.preço} </p>
        </div>
    );
}
export default ListaProdutos;