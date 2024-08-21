const Produto = ({valor}) => {
    return  (
        <div>
            <h3>{valor.nome} </h3>
            <p> Preço: {valor.preço} </p>
        </div>
    );
}
export default Produto;