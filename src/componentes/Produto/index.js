import '../../index.css';
const Produto = ({valor}) => {
    return  (
        <div className = 'card'>
            <h3 className = 'titulo'>{valor.nome} </h3>
            <p className = 'subtitulo'> Preço: {valor.preço} </p>
        </div>
    );
}
export default Produto;